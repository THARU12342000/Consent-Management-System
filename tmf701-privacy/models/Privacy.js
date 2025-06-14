const mongoose = require('mongoose');
const privacySchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  preferences: Object
});
module.exports = mongoose.model('Privacy', privacySchema); 