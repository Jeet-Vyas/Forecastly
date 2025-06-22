import React from 'react';
import axios from 'axios';
import {useCity} from '../../context/CityContext';
import CurrentWeather from './components/CurrentWeather';
import HourlyForecast from './components/HourlyForecast';
import DailyForecast from './components/DailyForecast';
import SunPath from './components/SunPath';

import bgnight from '../../assets/bgnight.mp4'
import bgday from '../../assets/bgday.mp4';

const ip = process.env.IP || 'localhost';

import { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const { city } = useCity();
  const [weatherData, setWeatherData] = useState();
  const [isNight, setIsNight] = useState(false);
  const [error, setError] = useState(null);

  const videoRef = useRef();

  function isNightTime(timestamp, timezone) {
    const totalMilliseconds = (timestamp + timezone) * 1000;
    const date = new Date(totalMilliseconds);
  
    const hours = date.getUTCHours();
    return hours < 6 || hours >= 18;
  }
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 = half speed
    }
  }, []);

  useEffect(() => {
    if(!city) return;

    const fetchWeatherData = async() => {
      try{
        const weatherResponse = await axios.get(`http://${ip}:5000/api/forecast?city=${city}`);
        console.log('weather response:', weatherResponse.data); 
        const data = weatherResponse.data.current;
        setWeatherData(weatherResponse.data);
        setIsNight(isNightTime(data.timestamp, data.timezone));
        setError(null);
      }
      catch (err) {
        setError("City not found. Please enter a valid city.");
        // setWeatherData(null);
      }
    }

    fetchWeatherData();
  }, [city])

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);  

  return (
    <>
        <div className='relative w-full min-h-screen overflow-hidden '>
          <video
            key={isNight}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10">
            <source src={isNight ? bgnight : bgday} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div className="relative z-1 p-5 flex flex-col gap-5 min-h-screen">
            <div className="w-full"> 
              {weatherData?.current && (
                <CurrentWeather data={weatherData.current} />
              )}
            </div>
            <div>
              {weatherData?.hourly && ( 
                <HourlyForecast data={weatherData.hourly} />
              )}
            </div>
            <div className='md:flex'>
              <div className='md:w-[70%]'>
                {weatherData?.daily && ( 
                  <DailyForecast data={weatherData.daily} />
                )}
              </div>
              <div className='mt-5 md:mt-0 md:w-[30%]'>
                {weatherData?.current && (
                  <SunPath data={weatherData.current} />
                )}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default LandingPage