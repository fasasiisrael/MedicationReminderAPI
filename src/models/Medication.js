const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  // Add more fields as needed for your Medication model
});

const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;
