const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "You are not authorized",
    });
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "You are not authorized",
        });
      }
      req.user = decoded;
      // console.log(req.user);
      next();
    });
  }
};

module.exports = verifyUser;
