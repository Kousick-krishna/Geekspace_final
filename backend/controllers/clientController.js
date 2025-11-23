import Client from "../models/Client.js";

// POST → Save contact message
export const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    res.json({ success: true, data: newClient });
  } catch (err) {
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
