![smartnotebookiot_circuit_diagram](https://github.com/user-attachments/assets/9eee556d-d941-4f44-a0c9-707c17fc6c21)# Smart Notebook IoT 📋

A document management system that integrates with IoT sensors to capture physical measurements (height) alongside document uploads.

## Circuit Diagram 
![Uploadin<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="boardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2E8B57;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#228B22;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="sensorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4169E1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E90FF;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="3" dy="3" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="600" fill="#f8fafc"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="#2d3748">
    Smart Notebook IoT - Circuit Diagram
  </text>
  
  <!-- ESP32/NodeMCU Board -->
  <g transform="translate(300, 200)">
    <rect x="0" y="0" width="200" height="120" rx="10" fill="url(#boardGradient)" filter="url(#shadow)"/>
    <text x="100" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white">
      ESP32 / NodeMCU
    </text>
    <text x="100" y="45" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white">
      WiFi Microcontroller
    </text>
    
    <!-- Pins -->
    <g fill="white" font-family="Arial, sans-serif" font-size="10">
      <!-- Left side pins -->
      <circle cx="10" cy="70" r="3" fill="#FFD700"/>
      <text x="20" y="75" fill="#333">VCC (3.3V)</text>
      <circle cx="10" cy="85" r="3" fill="#333"/>
      <text x="20" y="90" fill="#333">GND</text>
      <circle cx="10" cy="100" r="3" fill="#FF6B6B"/>
      <text x="20" y="105" fill="#333">D2 (GPIO4)</text>
      
      <!-- Right side pins -->
      <circle cx="190" cy="70" r="3" fill="#4ECDC4"/>
      <text x="170" y="75" text-anchor="end" fill="#333">D1 (GPIO5)</text>
      <circle cx="190" cy="85" r="3" fill="#45B7D1"/>
      <text x="170" y="90" text-anchor="end" fill="#333">D0 (GPIO16)</text>
      <circle cx="190" cy="100" r="3" fill="#96CEB4"/>
      <text x="170" y="105" text-anchor="end" fill="#333">A0 (ADC)</text>
    </g>
  </g>
  
  <!-- HC-SR04 Ultrasonic Sensor -->
  <g transform="translate(350, 80)">
    <rect x="0" y="0" width="100" height="60" rx="5" fill="url(#sensorGradient)" filter="url(#shadow)"/>
    <text x="50" y="20" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white">
      HC-SR04
    </text>
    <text x="50" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">
      Ultrasonic Sensor
    </text>
    
    <!-- Sensor "eyes" -->
    <circle cx="25" cy="50" r="8" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <circle cx="75" cy="50" r="8" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <text x="25" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="#333">T</text>
    <text x="75" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="#333">R</text>
    
    <!-- Pins -->
    <g fill="#FFD700" font-family="Arial, sans-serif" font-size="8">
      <circle cx="15" cy="65" r="2"/>
      <text x="15" y="80" text-anchor="middle" fill="#333">VCC</text>
      <circle cx="35" cy="65" r="2" fill="#FF6B6B"/>
      <text x="35" y="80" text-anchor="middle" fill="#333">Trig</text>
      <circle cx="65" cy="65" r="2" fill="#4ECDC4"/>
      <text x="65" y="80" text-anchor="middle" fill="#333">Echo</text>
      <circle cx="85" cy="65" r="2" fill="#333"/>
      <text x="85" y="80" text-anchor="middle" fill="#333">GND</text>
    </g>
  </g>
  
  <!-- WiFi Symbol -->
  <g transform="translate(180, 250)">
    <path d="M 20 20 Q 30 10 40 20" stroke="#667eea" stroke-width="2" fill="none"/>
    <path d="M 15 25 Q 30 5 45 25" stroke="#667eea" stroke-width="2" fill="none"/>
    <path d="M 10 30 Q 30 0 50 30" stroke="#667eea" stroke-width="2" fill="none"/>
    <circle cx="30" cy="35" r="2" fill="#667eea"/>
    <text x="30" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#667eea" font-weight="bold">
      WiFi Connection
    </text>
  </g>
  
  <!-- Cloud/Server -->
  <g transform="translate(550, 240)">
    <ellipse cx="40" cy="15" rx="25" ry="12" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <ellipse cx="20" cy="25" rx="20" ry="10" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <ellipse cx="60" cy="25" rx="20" ry="10" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <ellipse cx="40" cy="30" rx="35" ry="15" fill="#E8E8E8" stroke="#333" stroke-width="1"/>
    <text x="40" y="55" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="#333" font-weight="bold">
      Web Server
    </text>
    <text x="40" y="70" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#666">
      Document Storage
    </text>
  </g>
  
  <!-- Connection Wires -->
  <!-- VCC Connection -->
  <line x1="310" y1="270" x2="365" y2="145" stroke="#FFD700" stroke-width="3" marker-end="url(#arrowhead)"/>
  
  <!-- GND Connection -->
  <line x1="310" y1="285" x2="435" y2="145" stroke="#333" stroke-width="3"/>
  
  <!-- Trigger Connection -->
  <line x1="310" y1="300" x2="385" y2="145" stroke="#FF6B6B" stroke-width="3"/>
  
  <!-- Echo Connection -->
  <line x1="490" y1="270" x2="415" y2="145" stroke="#4ECDC4" stroke-width="3"/>
  
  <!-- WiFi Connection to Server -->
  <line x1="250" y1="285" x2="550" y2="285" stroke="#667eea" stroke-width="2" stroke-dasharray="5,5"/>
  
  <!-- Arrow marker -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#333"/>
    </marker>
  </defs>
  
  <!-- Connection Table -->
  <g transform="translate(50, 400)">
    <rect x="0" y="0" width="700" height="180" rx="10" fill="white" stroke="#e2e8f0" stroke-width="1" filter="url(#shadow)"/>
    <text x="350" y="25" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="#2d3748">
      Hardware Connections
    </text>
    
    <!-- Table Headers -->
    <g font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#4a5568">
      <text x="30" y="50">HC-SR04 Sensor</text>
      <text x="200" y="50">ESP32/NodeMCU</text>
      <text x="350" y="50">Wire Color</text>
      <text x="500" y="50">Function</text>
    </g>
    
    <!-- Table Content -->
    <g font-family="Arial, sans-serif" font-size="11" fill="#2d3748">
      <!-- Row 1 -->
      <text x="30" y="75">VCC</text>
      <text x="200" y="75">3.3V or 5V</text>
      <rect x="350" y="65" width="20" height="15" fill="#FFD700"/>
      <text x="380" y="77">Red/Yellow</text>
      <text x="500" y="75">Power Supply</text>
      
      <!-- Row 2 -->
      <text x="30" y="100">GND</text>
      <text x="200" y="100">GND</text>
      <rect x="350" y="90" width="20" height="15" fill="#333"/>
      <text x="380" y="102">Black</text>
      <text x="500" y="100">Ground</text>
      
      <!-- Row 3 -->
      <text x="30" y="125">Trig</text>
      <text x="200" y="125">D2 (GPIO4)</text>
      <rect x="350" y="115" width="20" height="15" fill="#FF6B6B"/>
      <text x="380" y="127">Red</text>
      <text x="500" y="125">Trigger Signal</text>
      
      <!-- Row 4 -->
      <text x="30" y="150">Echo</text>
      <text x="200" y="150">D1 (GPIO5)</text>
      <rect x="350" y="140" width="20" height="15" fill="#4ECDC4"/>
      <text x="380" y="152">Blue/Green</text>
      <text x="500" y="150">Echo Response</text>
    </g>
  </g>
  
  <!-- Measurement Illustration -->
  <g transform="translate(100, 100)">
    <rect x="0" y="40" width="80" height="10" rx="2" fill="#8B4513" stroke="#654321" stroke-width="1"/>
    <text x="40" y="35" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#333">Document</text>
    
    <!-- Distance Lines -->
    <line x1="40" y1="50" x2="40" y2="120" stroke="#FF4500" stroke-width="2" stroke-dasharray="3,3"/>
    <text x="45" y="85" font-family="Arial, sans-serif" font-size="10" fill="#FF4500" font-weight="bold">Height</text>
    <text x="45" y="100" font-family="Arial, sans-serif" font-size="10" fill="#FF4500">Measurement</text>
    
    <!-- Base -->
    <rect x="0" y="120" width="80" height="5" fill="#696969"/>
  </g>
</svg>g smartnotebookiot_circuit_diagram.svg…]()

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
