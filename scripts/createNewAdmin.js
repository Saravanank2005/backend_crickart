const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

mongoose.connect('mongodb+srv://saravanan:saran2005@cluster0.1d6gi.mongodb.net/crickart')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

async function createNewAdmin() {
  try {
    // Delete existing admin if any
    await User.deleteOne({ email: 'admin@crickart.com' });

    // Create new admin
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const adminUser = new User({
      email: 'admin@crickart.com',
      password: hashedPassword,
      role: 'admin'
    });

    await adminUser.save();
    console.log('New admin user created successfully');
    
    // Verify the user
    const createdUser = await User.findOne({ email: 'admin@crickart.com' });
    console.log('Created user details:', {
      email: createdUser.email,
      role: createdUser.role
    });
  } catch (error) {
    console.error('Error creating admin:', error);
  } finally {
    mongoose.connection.close();
  }
}

createNewAdmin(); 