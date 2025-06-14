const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Customer' },
  productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
  agreementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agreement' },
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema); 