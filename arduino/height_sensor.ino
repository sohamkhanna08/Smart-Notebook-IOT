#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// Server configuration
const char* serverURL = "http://192.168.1.100:3000/api/height"; // Update with your server IP

// Ultrasonic sensor pins
const int trigPin = 5;
const int echoPin = 18;
const int buzzerPin = 2;

// Constants
const float SOUND_SPEED = 0.034; // cm/μs
const float SENSOR_HEIGHT = 250; // Height where sensor is mounted (cm)

void setup() {
  Serial.begin(115200);
  
  // Initialize pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  
  Serial.println();
  Serial.println("📶 WiFi connected!");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
  
  // Success beep
  digitalWrite(buzzerPin, HIGH);
  delay(200);
  digitalWrite(buzzerPin, LOW);
  
  Serial.println("📏 Height sensor ready!");
}

void loop() {
  float distance = measureDistance();
  float height = SENSOR_HEIGHT - distance;
  
  // Validate measurement (person should be between 50-220 cm)
  if (height > 50 && height < 220) {
    Serial.printf("📏 Measured height: %.1f cm\n", height);
    
    // Send to server
    if (sendHeightData(height)) {
      // Success beep
      digitalWrite(buzzerPin, HIGH);
      delay(100);
      digitalWrite(buzzerPin, LOW);
      delay(50);
      digitalWrite(buzzerPin, HIGH);
      delay(100);
      digitalWrite(buzzerPin, LOW);
    }
    
    delay(2000); // Wait 2 seconds between measurements
  } else {
    Serial.println("⚠️  No valid measurement detected");
    delay(500);
  }
}

float measureDistance() {
  // Clear trigger
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  
  // Send 10μs pulse
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  // Read echo duration
  long duration = pulseIn(echoPin, HIGH);
  
  // Calculate distance
  float distance = duration * SOUND_SPEED / 2;
  
  return distance;
}

bool sendHeightData(float height) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");
    
    // Create JSON payload
    StaticJsonDocument<200> jsonDoc;
    jsonDoc["height"] = height;
    
    String jsonString;
    serializeJson(jsonDoc, jsonString);
    
    // Send POST request
    int httpResponseCode = http.POST(jsonString);
    
    if (httpResponseCode == 200) {
      Serial.println("✅ Height data sent successfully");
      http.end();
      return true;
    } else {
      Serial.printf("❌ HTTP Error: %d\n", httpResponseCode);
    }
    
    http.end();
  } else {
    Serial.println("❌ WiFi disconnected");
  }
  
  return false;
}