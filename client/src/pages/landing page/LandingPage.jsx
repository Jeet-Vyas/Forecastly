import React from 'react';
import axios from 'axios';
import {useCity} from '../../context/CityContext';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import clearSkyVideo from '../../assets/clear_sky.mp4';

import { useState, useEffect } from 'react'

const LandingPage = () => {
  const { city } = useCity();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if(!city) return;

    const fetchWeatherData = async() => {
      const weatherResponse = await axios.get(`http://localhost:5000/api/forecast?city=${city}`);
      setWeatherData(weatherResponse.data);
      console.log(weatherData)
    }

    fetchWeatherData();
  }, [city])

  return (
    <>
        <div className='relative w-full min-h-screen overflow-hidden'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10">
            <source src={clearSkyVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div className="relative z-1 p-5 flex flex-col gap-5 min-h-screen">
            <div className="w-full h-96"> 
              {weatherData?.current && (
                <CurrentWeather data={weatherData.current} />
              )}
            </div>
            <div className="h-60">
              {weatherData?.hourly && ( 
                <HourlyForecast data={weatherData.hourly} />
              )}
            </div>
            <div>
              {weatherData?.daily && ( 
                <DailyForecast data={weatherData.daily} />
              )}
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingPage