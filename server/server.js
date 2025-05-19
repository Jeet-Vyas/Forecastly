require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// routes
const weatherRoutes = require('./routes/weather.js');

app.use(cors());
app.use(weatherRoutes);

app.get('/', (req, res) => {
    res.send('Backend is working!');
  });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});