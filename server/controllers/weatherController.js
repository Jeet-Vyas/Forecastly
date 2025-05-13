const axios = require('axios');

const API_KEY = process.env.WEATHER_API_KEY;

exports.getWeatherByCity = async(req, res) => {
    const cityName = req.query.city;

    if (!cityName) {
        return res.status(400).json({ error: "City name is required" });
    }

    try{
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
    
        const data = response.data;
        // console.log(data);

        const weather = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            pressure: data.main.pressure,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            visibility: data.visibility,
        }

        res.json(weather);
    }
    catch(error){
        return res.status(500).json({ error: "Failed to fetch weather data" });
    }
}