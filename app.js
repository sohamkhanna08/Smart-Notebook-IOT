const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const DocumentRecord = require('./models/DocumentRecord');

const app = express();
const PORT = process.env.PORT || 3000;

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('📊 Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Store latest height from IoT sensor
let latestHeight = 0;

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// IoT endpoint to receive height data
app.post('/api/height', (req, res) => {
  const { height } = req.body;
  latestHeight = height;
  console.log(`📏 Height received: ${height} cm`);
  res.json({ success: true, height: latestHeight });
});

// Get current height
app.get('/api/height', (req, res) => {
  res.json({ height: latestHeight });
});

// Manual sensor reading endpoint
app.post('/api/read-sensor', (req, res) => {
  console.log('📏 Manual sensor reading requested...');
  res.json({ 
    success: true, 
    height: latestHeight,
    timestamp: new Date().toISOString(),
    message: 'Sensor reading captured' 
  });
});

// Get all sensor readings history
let sensorReadings = [];
app.get('/api/sensor-history', (req, res) => {
  res.json(sensorReadings);
});

// Store sensor reading
app.post('/api/store-reading', (req, res) => {
  const { height, note } = req.body;
  const reading = {
    id: Date.now(),
    height: height || latestHeight,
    note: note || 'Manual reading',
    timestamp: new Date().toISOString()
  };
  
  sensorReadings.unshift(reading); // Add to beginning
  if (sensorReadings.length > 50) sensorReadings.pop(); // Keep last 50 readings
  
  console.log(`📊 Sensor reading stored: ${reading.height} cm - ${reading.note}`);
  res.json({ success: true, reading });
});

// Upload document with height association
app.post('/api/upload', upload.single('document'), async (req, res) => {
  try {
    const newRecord = new DocumentRecord({
      filename: req.file.originalname,
      filepath: req.file.path,
      height: latestHeight
    });

    await newRecord.save();
    console.log(`📄 Document uploaded: ${req.file.originalname} | Height: ${latestHeight} cm`);
    
    res.json({ 
      success: true, 
      record: newRecord,
      message: 'Document uploaded successfully!' 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all records
app.get('/api/records', async (req, res) => {
  try {
    const records = await DocumentRecord.find().sort({ uploadTime: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete record
app.delete('/api/records/:id', async (req, res) => {
  try {
    const record = await DocumentRecord.findById(req.params.id);
    if (record) {
      // Delete file from filesystem
      if (fs.existsSync(record.filepath)) {
        fs.unlinkSync(record.filepath);
      }
      await DocumentRecord.findByIdAndDelete(req.params.id);
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete sensor reading
app.delete('/api/sensor-reading/:id', (req, res) => {
  const readingId = req.params.id;
  sensorReadings = sensorReadings.filter(reading => reading.id != readingId);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Smart Notebook IoT running`);
});
