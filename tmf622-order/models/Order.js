const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  agreementId: { type: mongoose.Schema.Types.ObjectId, ref: 'Agreement' },
  orderDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', orderSchema); 