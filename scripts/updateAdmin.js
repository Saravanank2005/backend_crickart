const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb+srv://saravanan:saran2005@cluster0.1d6gi.mongodb.net/crickart')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function updateAdminUser() {
  try {
    // Find user by email
    const user = await User.findOne({ email: 'admin@crickart.com' });
    
    if (!user) {
      console.log('User not found');
      return;
    }

    console.log('Current user:', {
      email: user.email,
      role: user.role
    });

    // Update role to admin
    user.role = 'admin';
    await user.save();

    console.log('User updated successfully. New details:', {
      email: user.email,
      role: user.role
    });
  } catch (error) {
    console.error('Error updating user:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateAdminUser(); 