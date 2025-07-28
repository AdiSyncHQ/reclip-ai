const express = require('express');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');

const app = express();
app.use(express.json());
app.use('/jobs', jobRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = app;
