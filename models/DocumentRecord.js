const mongoose = require('mongoose');

const DocumentRecordSchema = new mongoose.Schema({
  filename: String,
  filepath: String,
  uploadTime: { type: Date, default: Date.now },
  height: Number // height captured from IoT sensor
});

module.exports = mongoose.model('DocumentRecord', DocumentRecordSchema);
