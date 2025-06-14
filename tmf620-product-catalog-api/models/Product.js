const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  requiresConsent: { type: Boolean, default: false }
});

module.exports = mongoose.model('Product', productSchema); 