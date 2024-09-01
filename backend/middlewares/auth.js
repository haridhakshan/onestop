const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const jwtSecret = process.env.JWT_SECRET_KEY;
  if (res.cookies && !res.cookies.token) {
    res.json({ error: "Token not found at Cookie" });
  }
  try {
    jwt.verify(req.cookies["token"], jwtSecret, function (error) {
      if (error) {
        req.authenticated = false;
        res.json({ error: "Token not found at Cookie!" });
      } else {
        req.authenticated = true;
        next();
      }
    });
  } catch (e) {
    console.log(e);
    res.json({ msg: "Authentication failed!" });
  }
}

module.exports = auth;