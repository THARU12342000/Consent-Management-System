const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// Import routes
const productOfferingPriceRoutes = require('./routes/productOfferingPriceRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const agreementRoutes = require('./routes/agreementRoutes');
const customerRoutes = require('./routes/customerRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use routes with base paths
app.use('/api/productOfferingPrices', productOfferingPriceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/agreements', agreementRoutes);
app.use('/api/customers', customerRoutes);

// Root endpoint for quick check
app.get('/', (req, res) => {
  res.send('Welcome to the TMF620 Product Catalog Dummy API');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
