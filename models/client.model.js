const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema(
    {
        party_name: {
            type: String,
            required: true
        },
        contact_no: {
            type: Number,
            required: true
        },
        remarks: {
            type: String,
            default: '',
            required: true,
        },
    },
    {
        timestamps: true,
    },
);


const Client = mongoose.model('Client', ClientSchema);
module.exports = { Client }
