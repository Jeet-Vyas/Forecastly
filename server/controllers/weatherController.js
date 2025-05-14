const axios = require('axios');

const OPENWEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const TOMORROW_API_KEY = process.env.TOMORROWIO_API_KEY;

function getCloudDescription(cover) {
    if (cover < 10) return '☀️ Clear';
    if (cover < 30) return '🌤 Mostly Clear';
    if (cover < 60) return '⛅ Partly Cloudy';
    if (cover < 90) return '🌥 Mostly Cloudy';
    return '☁️ Overcast';
}

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
            description: data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
            pressure: data.main.pressure,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            visibility: data.visibility,
            lon: data.coord.lon,
            lat: data.coord.lat,
        }

        let forecastResponse;
        try{
            forecastResponse = await axios.get(`https://api.tomorrow.io/v4/weather/forecast`, {
                params: {
                    location: `${currentWeather.lat},${currentWeather.lon}`,
                    apikey: TOMORROW_API_KEY,
                    timesteps: '1h,1d',
                    units: 'metric',
                }
            });

            const forecastData = forecastResponse.data.timelines;

            const hourlyForecast = forecastData.hourly.slice(0, 48).map(hour => ({
                time: hour.time,
                temperature: hour.values.temperature,
                humidity: hour.values.humidity,
                windSpeed: hour.values.windSpeed,
                weatherCode: hour.values.weatherCode,
                visibility: hour.values.visibility,
                uvIndex: hour.values.uvIndex,
                cloudCover: hour.values.cloudCover,
                cloudDescription: getCloudDescription(hour.values.cloudCover)
            }));
        
            const dailyForecast = forecastData.daily.slice(0, 5).map(day => ({
                date: day.time,
                temperatureMax: day.values.temperatureApparentMax,
                temperatureMin: day.values.temperatureApparentMin,
                humidityAvg: day.values.humidityAvg,
                sunrise: day.values.sunriseTime,
                sunset: day.values.sunsetTime,
                weatherCode: day.values.weatherCode,
                visibility: day.values.visibilityAvg,
                uvIndex: day.values.uvIndexMax,
                cloudCover: day.values.cloudCoverAvg,
                cloudDescription: getCloudDescription(day.values.cloudCover)
            }));

            res.json({
                location: {
                    city: currentWeather.city,
                    country: currentWeather.country,
                },
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
