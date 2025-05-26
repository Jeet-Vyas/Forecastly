const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

exports.getWeatherByCity = async(req, res) => {
    const cityName = req.query.city;

    if (!cityName) {
        return res.status(400).json({ error: "City name is required" });
    }

    try{
        const weatherResponse = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
            params: {
                q: cityName,
                appid: OPENWEATHER_API_KEY,
                units: 'metric',
            },
        });    
        const data = weatherResponse.data;

        const currentWeather = {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            windDeg: data.wind.deg,
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            pressure: data.main.pressure,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            visibility: data.visibility,
            lon: data.coord.lon,
            lat: data.coord.lat,
            timestamp: data.dt,
            timezone: data.timezone,
        }

        try{
            forecastResponse = await axios.get(`https://pro.openweathermap.org/data/2.5/forecast`, {
                params: {
                    q: cityName,
                    appid: OPENWEATHER_API_KEY,
                    units: 'metric',
                }
            });

            const forecastData = forecastResponse.data;

            const hourlyForecast = forecastData.list.slice(0, 16).map(hour => ({
                time: hour.dt_txt,
                temperature: hour.main.temp,
                icon: `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,
                description: hour.weather[0].description
            }));
        
            const dailyForecast = forecastData.list.filter(item =>
                item.dt_txt.includes('12:00:00')
              ).slice(0, 5).map(day => ({
                date: day.dt_txt.split(' ')[0],
                minTemp: day.main.temp_min,
                maxTemp: day.main.temp_max,
                icon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
                description: day.weather[0].description
            }));

            res.json({
                current: currentWeather,
                hourly: hourlyForecast,
                daily: dailyForecast,
            });
        } 
        catch (e) {
            return res.status(502).json({ error: 'Forecast service failed. Please try again later.' });
        }

    }
    catch(e){
        if (e.response && e.response.status === 404) {
            return res.status(404).json({ error: 'City not found' });
        }
      
        console.error('Weather fetch error:', e.message);
        return res.status(500).json({ error: 'Server error while fetching weather data.' });
    }
}
