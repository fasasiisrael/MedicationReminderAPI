const express = require('express');
const router = express.Router();
const medicationController = require('../controllers/medicationController');

// Medication Routes

// @route   GET /api/medications
// @desc    Get all medications
// @access  Public
router.get('/', medicationController.getAllMedications);

// @route   GET /api/medications/:id
// @desc    Get a specific medication by ID
// @access  Public
router.get('/:id', medicationController.getMedicationById);

// @route   POST /api/medications
// @desc    Create a new medication
// @access  Public
router.post('/', medicationController.createMedication);

// @route   PUT /api/medications/:id
// @desc    Update a medication by ID
// @access  Public
router.put('/:id', medicationController.updateMedication);

// @route   DELETE /api/medications/:id
// @desc    Delete a medication by ID
// @access  Public
router.delete('/:id', medicationController.deleteMedication);

module.exports = router;
