// Validation Functions

// Example validation function
const validateMedicationData = (medicationData) => {
    const { name, dosage, frequency } = medicationData;
  
    if (!name || !dosage || !frequency) {
      throw new Error('Name, dosage, and frequency are required for a medication');
    }
  
    // Add more validation rules as needed
  
    return true; // Validation passed
  };
  
  module.exports = {
    validateMedicationData,
  };
  