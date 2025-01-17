const { Client } = require("../models/client.model");



// Create a new client
const createClient = async (req, res) => {
    const { party_name, contact_no, remarks } = req.body;
    console.log("body",req.body)

    if (!party_name || !contact_no || !remarks) {
        return res.status(400).json({success: false, message: "Party Name, Contact No, and Remarks are required" });
    }

    const client = new Client({
        party_name,
        contact_no,
        remarks
    });

    try {
        const savedClient = await client.save();
        res.status(201).json(savedClient);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all clients
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createClient,
    getAllClients,
}