const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  let username = req.body.username;

  const token = jwt.sign({ user: username }, "12345678");
  res.cookie("cookie", token, {
    httpOnly: true,
  });
  return res.send({ token: token });
};

module.exports = login;
