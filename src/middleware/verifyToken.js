const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const cookie = req.cookies.cookie;

  jwt.verify(cookie, "12345678", (err, data) => {
    if (err) {
      res.sendStatus(401);
    } else if (data.user) {
      req.user = data.user;
      return next();
    }
  });
}

module.exports = verifyToken;
