const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceRequestSchema = new Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    severity: { type: String, required: true },
    description: { type: String, required: true },
    contactInfo: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);