const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const orderRoutes = require('./routes/orderRoutes');
const app = express();
app.use(express.json());
app.use('/orders', orderRoutes);

mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(4004, () => console.log('Order API running on 4004'))); 