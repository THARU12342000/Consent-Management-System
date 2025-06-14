const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const privacyRoutes = require('./routes/privacyRoutes');
const app = express();
app.use(express.json());
app.use('/privacy', privacyRoutes);

mongoose.connect(process.env.MONGO_URI, {
  dbName: process.env.DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(4005, () => console.log('Privacy API running on 4005'))); 