const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "No token provided." });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (!token) {
    return res.status(403).json({ message: "Token is not valid." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Unauthorized." });
  }
};
