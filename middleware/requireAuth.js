
const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).send({
          message: 'token verification failed'
        })
      } else {
        next();
      }
    });
  } else {
    res.status(401).send({
      message: 'missing token'
    })
  }
};

module.exports = { requireAuth };
