const User = require('../models/User');

// User Service Functions

// Get all users
const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Get a specific user by ID
const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Create a new user
const createUser = async (userData) => {
  try {
    return await User.create(userData);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Update a user by ID
const updateUser = async (userId, updatedData) => {
  try {
    return await User.findByIdAndUpdate(userId, updatedData, { new: true });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

// Delete a user by ID
const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
