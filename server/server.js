import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express()
const PORT = process.env.PORT || 5000;
const ip = process.env.IP || 'localhost';

// routes
import weatherRoutes from './routes/weather.js';

app.use(cors());
app.use(weatherRoutes);

app.get('/', (req, res) => {
    res.send('Backend is working!');
  });

app.listen(PORT, '0.0.0.0',  () => {
    console.log(`Server running on http://${ip}:${PORT}`);
});