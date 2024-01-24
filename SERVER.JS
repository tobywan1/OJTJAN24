// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/TollGateData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schemas and models
const tollGateDataSchema = new mongoose.Schema({
  expressway: String,
  entry: String,
  exit: String,
  vehicle: String,
  vehicleClass: String,
  price: String,
});

const TollGateData = mongoose.model('TollGateData', tollGateDataSchema);

// API routes
app.post('/addTollGateData', async (req, res) => {
  try {
    const newData = req.body;
    const tollGateData = new TollGateData(newData);
    await tollGateData.save();
    res.json({ success: true, message: 'Data added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get('/getAllTollGateData', async (req, res) => {
  try {
    const data = await TollGateData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/updateTollGateData/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { confirmationId, updatedData } = req.body;

    // Check if the confirmationId matches before updating
    if (confirmationId === 'toby') {
      const result = await TollGateData.findByIdAndUpdate(id, updatedData, { new: true });
      res.json({ success: true, message: 'Data updated successfully', data: result });
    } else {
      res.status(401).json({ success: false, message: 'Invalid confirmation ID' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.delete('/deleteTollGateData/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const result = await TollGateData.findByIdAndDelete(id);

    res.json({ success: true, message: 'Data deleted successfully', data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


app.get('/getAllTollGateData', async (req, res) => {
  try {
    const data = await TollGateData.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getTollGateData/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TollGateData.findById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Add other CRUD routes (update, delete) as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

