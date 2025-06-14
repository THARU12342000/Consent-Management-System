const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  agreements: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Agreement' }]
});

module.exports = mongoose.model('Customer', customerSchema); 