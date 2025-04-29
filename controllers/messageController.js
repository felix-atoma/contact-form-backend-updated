const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const sendEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `New Contact Form Message from ${name}`,
    html: `
      <h3>New Message Received</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

const submitMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newMessage = new Message({ name, email, phone, message });
    await newMessage.save();
    await sendEmail({ name, email, phone, message });

    res.status(200).json({ message: "Thank you for contacting Felix Atoma, I will get back to you." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

module.exports = { submitMessage };