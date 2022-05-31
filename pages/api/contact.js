export default function (req, res) {
  const dotenv = require("dotenv");
  dotenv.config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "zephyr98k@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "zephyr98k@gmail.com",
    to: "kartikjha13@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, data) => {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail send");
      res.send("success");
    }
});
  
}
