const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../controllers/weatherController');

// GET /api/weather?city=London
router.get('/api/forecast', getWeatherByCity);

module.exports = router;
