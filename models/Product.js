const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  old_price: {
    type: Number,
    required: true
  },
  new_price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['bats', 'balls', 'kits']
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
