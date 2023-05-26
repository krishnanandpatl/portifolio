const express = require("express");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
  try {
    const cookies = req.cookies;
    if (cookies.JWT) {
      jwt.verify(cookies.JWT, process.env.JWTSECRET);
      res.status(200).json({ success: true, message: "Valid" });
    } else {
      res.clearCookie("JWT");
      res.status(401).json({
        success: false,
        message: "Failed Authenication",
      });
    }
  } catch (error) {
    res.clearCookie("JWT");
    res.status(401).json({
      success: false,
      message: error.message === "invalid token" ? "Expired" : error.message,
    });
  }
});

module.exports = authRouter;
