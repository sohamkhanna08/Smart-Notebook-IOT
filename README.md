# Smart Notebook IoT 📋

A document management system that integrates with IoT sensors to capture physical measurements (height) alongside document uploads.

## Circuit Diagram 
![smartnotebookiot_circuit_diagram](https://github.com/user-attachments/assets/9eee556d-d941-4f44-a0c9-707c17fc6c21)

## Features

- 📤 Upload documents (PDF, images, Word docs)
- 📏 Real-time height measurement from ESP32 sensor
- 📋 Document-height association and storage
- 🎯 Perfect for clinics, schools, fitness centers
- 📱 Responsive web interface

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Update `.env` with your MongoDB URI
   - Update Arduino sketch with WiFi credentials and server IP

3. **Hardware setup:**
   - ESP32 board
   - HC-SR04 ultrasonic sensor
   - Buzzer (optional)
   - Connections: Trig(GPIO 5), Echo(GPIO 18), Buzzer(GPIO 2)

4. **Run the application:**
   ```bash
   npm start
   ```

## Usage

1. **Setup sensor:** Mount ultrasonic sensor at known height (update SENSOR_HEIGHT in Arduino code)
2. **Upload documents:** Select file and upload - height is automatically captured
3. **View records:** Dashboard shows all documents with associated height measurements
4. **Download/Delete:** Manage your document records

## Use Cases

- **Medical:** Patient reports + height tracking
- **Education:** Student documents + growth monitoring  
- **Fitness:** Health records + body measurements
- **Research:** Data collection with physical measurements

---
*Smart Notebook IoT - Bridging physical and digital data* 🌉
