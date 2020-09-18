const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { matchedData, validationResult } = require('express-validator');
const User = require('../models/user');

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge
  });
};

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.login(email, password)

  if (!user) {
    res.status(401).json({
      message: 'Authentication Failed'
    })
    return
  }

  const token = createToken(user.get('id'));
  res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
  res.json({ user: user._id });

}

const register = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(422).json({
      data: errors
        .array()
        .map(error => ({ key: error.param, message: error.msg }))
    })
    return
  }
  const data = matchedData(req)
  try {
    data.password = await bcrypt.hash(data.password, User.hashSaltRounds)
    const user = await new User(data).save()
    const token = createToken(user.get('id'));
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user.get('id') });
  } catch (error) {
    res.status(500).json({
      message: 'An unexpected error occurred when trying to register new user'
    })
  }
}
const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

const check = (req, res) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.status(401).send({
          message: 'token verification failed'
        })
      } else {
        const user = await new User({ id: decodedToken.id }).fetch({ require: false })

        if (!user) {
          res.status(401).send({
            message: 'user not found'
          })
        }
        else {
          res.send({
            message: 'authenticated user'
          })
        }
      }
    });
  } else {
    res.status(401).send({
      message: 'missing token'
    })
  }
};


module.exports = {
  login,
  register,
  logout,
  check
}
