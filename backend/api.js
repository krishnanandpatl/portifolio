const express = require("express");
const path = require("path");
const imageRouter = require("./Controller/imageController");
const accessRouter = require("./Controller/accessController");
const mailRouter = require("./Controller/mailController");
const cookieParser = require("cookie-parser");
const authRouter = require("./Controller/authController");

require("dotenv").config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(express.static("dist"));

app.use("/api/image", imageRouter);

app.use("/api/validator", accessRouter);

app.use("/api/authChecker", authRouter);

app.use("/api/mailReq", mailRouter);

app.use("/*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
