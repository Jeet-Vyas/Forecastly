import express from 'express';
const router = express.Router();
import { getWeatherByCity } from '../controllers/weatherController.js';

// GET /api/weather?city=London
router.get('/api/forecast', getWeatherByCity);

export default router;
