
const jwt = require('jsonwebtoken');

module.exports.requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

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
