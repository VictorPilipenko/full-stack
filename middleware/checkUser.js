

const checkUser = (req, res, next) => {
  // const token = req.cookies.jwt;
  // if (token) {
  //   jwt.verify(token, 'secret', async (err, decodedToken) => {
  //     if (err) {
  //       res.locals.user = null;
  //       next();
  //     } else {
  //       let user = await User.findById(decodedToken.id);
  //       res.locals.user = user;
  //       next();
  //     }
  //   });
  // } else {
  //   res.locals.user = null;
  //   next();
  // }
};


module.exports = { checkUser };
