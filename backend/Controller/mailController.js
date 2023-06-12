const express = require("express");
const nodemailer = require("nodemailer");

const mailRouter = express.Router();

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

async function mailSender(email, data) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.APP_MAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let dataObj = {
    from: `Porifolio App`,
    to: "kshitijsrivastava0389@gmail.com",
    subject: "Requesting Access",
    html: `<b>${email} is requesting Access.</b><br/><b>Special message: ${data}</b>`,
  };
  // send mail with defined transport object
  await transporter.sendMail(dataObj);
}

mailRouter.post("/", async (req, res) => {
  try {
    let email = req.body.email;
    let data = req.body.data;

    if (validateEmail(email)) {
      await mailSender(email, data);
      res.status(200).json({
        success: true,
        message: "Please Wait for the reply To Access the Content.",
      });
    } else {
      res.status(401).json({ success: false, message: "Email Not Valid." });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = mailRouter;
