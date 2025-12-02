import Client from "../models/Client.js";
import nodemailer from "nodemailer";

// POST → Save contact message + Send Notification Email
export const createClient = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // 1️⃣ Save to MongoDB
    const newClient = await Client.create({ name, email, subject, message });

    // 2️⃣ Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NOTIFY_EMAIL,
        pass: process.env.NOTIFY_EMAIL_PASS,
      },
    });

    // 3️⃣ Email content
    const mailOptions = {
      from: process.env.NOTIFY_EMAIL,
      to: process.env.NOTIFY_EMAIL, // You get the notification
      subject: `New Contact Message: ${subject}`,
      text: `
A new contact form message was submitted!

Name: ${name}
Email: ${email}
Subject: ${subject}
Message:
${message}

Submitted at: ${new Date().toLocaleString()}
      `,
    };

    // 4️⃣ Send email
    await transporter.sendMail(mailOptions);

    // 5️⃣ Final Response
    res.json({ success: true, message: "Message saved and email sent", data: newClient });

  } catch (err) {
    console.error("Error in contact form:", err);
    res.status(500).json({ success: false, error: err.message });
  }
};

// GET → Get all messages
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ created_at: -1 });
    res.json({ success: true, data: clients });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
