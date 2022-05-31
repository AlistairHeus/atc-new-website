export default function (req, res) {
  const dotenv = require("dotenv");
  dotenv.config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
   service: "Gmail",
    port: 465,
    // host: "smtp.gmail.com",
    auth: {
      user: "zephyr98k@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "zephyr98k@gmail.com",
    to: "support@atcgroup.co.in",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
