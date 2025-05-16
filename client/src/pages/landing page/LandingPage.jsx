import React from 'react';
import axios from 'axios';
import {useCity} from '../../context/CityContext';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';

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
        <div className='bg-[#D1CFE2] p-5 flex flex-col gap-5'>
            <div className="w-full h-96 border-1 rounded-md"> 
              {weatherData?.current && (
                <CurrentWeather data={weatherData.current} />
              )}
            </div>
            <div className="h-60 border-1 rounded-md p-1">
              {weatherData?.hourly && ( 
                <HourlyForecast data={weatherData.hourly} />
              )}
            </div>
            <div className="h-full border-1 rounded-md p-1">
              {weatherData?.daily && ( 
                <DailyForecast data={weatherData.daily} />
              )}
            </div>
        </div>
    </>
  )
}

export default LandingPage