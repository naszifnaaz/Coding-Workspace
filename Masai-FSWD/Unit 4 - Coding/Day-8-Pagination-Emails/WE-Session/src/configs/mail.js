const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "80a89c5ef41394", // generated ethereal user
      pass: "44c2ace8d52a31", // generated ethereal password
    },
  });

  