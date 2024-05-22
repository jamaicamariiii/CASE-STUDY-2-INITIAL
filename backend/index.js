const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/arduinoData';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const SensorData = mongoose.model('SensorData', new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  lightIntensity: Number,
  timestamp: { type: Date, default: Date.now }
}));

app.use(bodyParser.json());

app.get('/data', (req, res) => {
  SensorData.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).send(`Error: ${err}`);
    });
});


app.post('/data', (req, res) => {
  const { temperature, humidity, lightIntensity } = req.body;
  const data = new SensorData({ temperature, humidity, lightIntensity });

  data.save()
    .then(() => res.status(201).send('Data saved successfully'))
    .catch(err => res.status(400).send(`Error: ${err}`));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
