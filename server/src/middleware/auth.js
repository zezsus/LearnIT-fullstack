const jwt = require("jsonwebtoken");

const verifyTooken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access token not found",
    });
  } else {
    try {
      const decoded = jwt.verify(token, "sangak1st");
      req.userId = decoded.userId;
      next();
    } catch (error) {
      console.log(error);
      return res.status(403).json({
        success: false,
        message: "Invalid token",
      });
    }
  }
};

module.exports = verifyTooken;
