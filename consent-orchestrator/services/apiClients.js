const axios = require('axios');

const BASES = {
  customer: 'http://localhost:4001',
  product: 'http://localhost:4002',
  agreement: 'http://localhost:4003',
  order: 'http://localhost:4004',
};

exports.createOrGetCustomer = async (customer) => {
  return await axios.post(`${BASES.customer}/customers`, customer);
};

exports.getProductById = async (productId) => {
  return await axios.get(`${BASES.product}/products/${productId}`);
};

exports.createAgreement = async (data) => {
  return await axios.post(`${BASES.agreement}/agreements`, data);
};

exports.createOrder = async (orderData) => {
  return await axios.post(`${BASES.order}/orders`, orderData);
};
