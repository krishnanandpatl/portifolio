const express = require("express");
const jwt = require("jsonwebtoken");

const accessRouter = express.Router();

accessRouter.get("/:password", (req, res) => {
  try {
    let password = req.params.password;
    if (password === process.env.PASSWORD) {
      const token = jwt.sign(
        {
          message: "Key Gen",
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
        },
        process.env.JWTSECRET
      );
      //cookie
      res.cookie("JWT", token);
      res.status(200).json({ success: true, message: "Authenticated" });
    } else {
      res.status(401).json({ success: false, message: "Wrong Password" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = accessRouter;
