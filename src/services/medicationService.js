const Medication = require('../models/Medication');

// Medication Service Functions

// Get all medications
const getAllMedications = async () => {
  try {
    return await Medication.find();
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Get a specific medication by ID
const getMedicationById = async (medicationId) => {
  try {
    return await Medication.findById(medicationId);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Create a new medication
const createMedication = async (medicationData) => {
  try {
    return await Medication.create(medicationData);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Update a medication by ID
const updateMedication = async (medicationId, updatedData) => {
  try {
    return await Medication.findByIdAndUpdate(medicationId, updatedData, { new: true });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Delete a medication by ID
const deleteMedication = async (medicationId) => {
  try {
    return await Medication.findByIdAndDelete(medicationId);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getAllMedications,
  getMedicationById,
  createMedication,
  updateMedication,
  deleteMedication,
};
