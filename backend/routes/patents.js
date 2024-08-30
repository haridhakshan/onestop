const express = require('express');
const router = express.Router();
const Patent = require('../models/Patent');

// Get all patents
router.get('/patents', async (req, res) => {
    try {
        const patents = await Patent.findAll();
        res.json(patents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get a single patent by ID
router.get('/patents/:id', async (req, res) => {
    try {
        const patent = await Patent.findByPk(req.params.id);
        res.json(patent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new patent
router.post('/patents', async (req, res) => {
    try {
        const patent = await Patent.create(req.body);
        res.status(201).json(patent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a patent
router.patch('/patents/:id', async (req, res) => {
    try {
        const patent = await Patent.findByPk(req.params.id);
        if (patent) {
            await patent.update(req.body);
            res.json(patent);
        } else {
            res.status(404).json({ message: 'Patent not found' });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a patent
router.delete('/patents/:id', async (req, res) => {
    try {
        const patent = await Patent.findByPk(req.params.id);
        if (patent) {
            await patent.destroy();
            res.json({ message: 'Patent deleted' });
        } else {
            res.status(404).json({ message: 'Patent not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;