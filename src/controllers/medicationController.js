const Medication = require('../models/Medication');

// Medication Controller Functions

// @route   GET /api/medications
// @desc    Get all medications
// @access  Public
const getAllMedications = async (req, res) => {
  try {
    const medications = await Medication.find();
    res.json(medications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @route   GET /api/medications/:id
// @desc    Get a specific medication by ID
// @access  Public
const getMedicationById = async (req, res) => {
  try {
    const medication = await Medication.findById(req.params.id);
    if (!medication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.json(medication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @route   POST /api/medications
// @desc    Create a new medication
// @access  Public
const createMedication = async (req, res) => {
  try {
    const newMedication = await Medication.create(req.body);
    res.status(201).json(newMedication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @route   PUT /api/medications/:id
// @desc    Update a medication by ID
// @access  Public
const updateMedication = async (req, res) => {
  try {
    const updatedMedication = await Medication.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMedication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.json(updatedMedication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// @route   DELETE /api/medications/:id
// @desc    Delete a medication by ID
// @access  Public
const deleteMedication = async (req, res) => {
  try {
    const deletedMedication = await Medication.findByIdAndDelete(req.params.id);
    if (!deletedMedication) {
      return res.status(404).json({ error: 'Medication not found' });
    }
    res.json(deletedMedication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,
};
