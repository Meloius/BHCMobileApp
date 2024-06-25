const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

router.get('/', async (req, res) => {
    try {
        const requests = await ServiceRequest.find();
        res.json(requests);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    const { type, category, severity, description, contactInfo } = req.body;
    try {
        const newRequest = new ServiceRequest({ type, category, severity, description, contactInfo });
        const request = await newRequest.save();
        res.json(request);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});
module.exports = router;