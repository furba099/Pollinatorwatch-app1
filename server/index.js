const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5500;

// ✅ In-memory storage
const users = [];
const sightings = [];

app.use(cors());
app.use(express.json());

// ✅ Root route
app.get('/', (req, res) => {
  res.send('PollinatorWatch Backend is running!');
});

// ✅ Signup route
app.post('/api/signup', (req, res) => {
  const { username, email, password } = req.body;

  // Check for existing user
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  // Save user
  users.push({ username, email, password });
  console.log('✅ Registered users:', users);

  res.status(201).json({ message: 'Signup successful' });
});

// ✅ Login route
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// ✅ Upload Bee Sighting
app.post('/api/upload', (req, res) => {
  const { imageUrl, location, species } = req.body;

  const sighting = {
    imageUrl,
    location,
    species,
    timestamp: new Date().toISOString(),
  };

  sightings.push(sighting);
  console.log('🐝 New Bee Sighting:', sighting);

  res.status(200).json({
    message: 'Bee sighting uploaded successfully!',
    data: sighting,
  });
});

// ✅ Get All Sightings
app.get('/api/sightings', (req, res) => {
  res.status(200).json(sightings);
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server is running on http://localhost:${PORT}`);
});
