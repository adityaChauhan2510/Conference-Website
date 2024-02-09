const express = require("express");
const bodyParser = require("body-parser");
const colors = require("colors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const upload = multer();

app.post("/api/submit", upload.single("paymentReceipt"), async (req, res) => {
  try {
    const paymentReceipt = req.file;
    console.log(paymentReceipt);

    if (!paymentReceipt) {
      return res.status(400).send("Payment receipt is required");
    }

    // const transporter = nodemailer.createTransport({
    //   service: "Gmail",
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL_USERNAME,
    //   to: "aditya2510@gmail.com",
    //   subject: "Payment Receipt",
    //   text: "Please find attached payment receipt",
    //   attachments: [
    //     {
    //       filename: paymentReceipt.originalname,
    //       content: paymentReceipt.buffer,
    //     },
    //   ],
    // };

    // await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred while sending email");
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
