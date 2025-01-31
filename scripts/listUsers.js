const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://saravanan:saran2005@cluster0.1d6gi.mongodb.net/crickart')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function listUsers() {
  try {
    const users = await User.find({}, '-password');
    console.log('All users:', users);
  } catch (error) {
    console.error('Error listing users:', error);
  } finally {
    mongoose.connection.close();
  }
}

listUsers(); 