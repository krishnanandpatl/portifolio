const express = require("express");
const path = require("path");
const fs = require("fs");

const imageRouter = express.Router();

imageRouter.get("/:paths/:option", (req, res) => {
  try {
    let paths = req.params.paths;
    let option = req.params.option;
    const imagesDir = path.join(
      __dirname,
      "..",
      "dist",
      "images",
      paths,
      option
    ); // Replace 'dir' with your actual directory name
    const images = fs
      .readdirSync(imagesDir)
      .filter((file) => file.endsWith(".png"));
    const imgPaths = images.map((imgs) => {
      return "/images/" + paths+"/" + option+"/" + imgs;
    });
    res.json({ images: imgPaths });
  } catch (error) {
    res.status(500).json({ succes: false, message: error.message });
  }
});

module.exports = imageRouter;
