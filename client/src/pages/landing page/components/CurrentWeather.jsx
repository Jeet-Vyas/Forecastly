import React from 'react';
import sunriseImage from '../../../assets/sunrise.svg';
import sunsetImage from '../../../assets/sunset.svg';
import pressureImage from '../../../assets/pressure.png';
import windImage from '../../../assets/wind.svg';
import humidityImage from '../../../assets/humidity.png';
import visibilityImage from '../../../assets/eye.svg';
import uvImage from '../../../assets/uv.png';
import coordinatesImage from '../../../assets/location.png'; 

import sunriseLightImage from '../../../assets/sunriseLight.svg';
import sunsetLightImage from '../../../assets/sunsetLight.svg';
import pressureLightImage from '../../../assets/pressureLight.png';
import windLightImage from '../../../assets/windLight.svg';
import humidityLightImage from '../../../assets/humidityLight.png';
import visibilityLightImage from '../../../assets/eyeLight.svg';
import uvLightImage from '../../../assets/uvLight.png';
import coordinatesLightImage from '../../../assets/locationLight.png'; 
import cloudImage from '../../../assets/cloudy.png';

function unixToLocal(timestamp, timezone) {
    const totalMilliseconds = (timestamp + timezone) * 1000;
    const date = new Date(totalMilliseconds);
  
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
  
    const dayName = weekdays[date.getUTCDay()];
    const monthName = months[date.getUTCMonth()];
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
  
    const hour = date.getUTCHours().toString().padStart(2, '0');
    const minute = date.getUTCMinutes().toString().padStart(2, '0');
  
    return `${dayName}, ${monthName} ${day}, ${year} | ${hour}:${minute}`;
}

function formatTimeAMPM(timestamp, timezone) {
    const totalMilliseconds = (timestamp + timezone) * 1000;
    const date = new Date(totalMilliseconds);
  
    // Extract hours and minutes using UTC methods
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    return `${hours}:${minutes} ${ampm}`;
}

const visibilityKm = (visibility) => {
    return (visibility / 1000).toFixed(1);
}

const CurrentWeather = ({data}) => {
  return (
    <>
        {/* <div className='h-full flex text-white bg-[#1A1B3F]'> */}
        <div className='h-full flex text-white'>
            <div className='flex flex-row px-8 w-6/10 py-10'>
                <div className='w-[50%] py-3 flex flex-col items-center'>
                    <p className='text-2xl'> {data.city}, <span> {data.country} </span></p>
                    <p className='text-sm'> {unixToLocal(data.timestamp, data.timezone)} </p>
                    <div className='h-50 w-50 rounded-[50%] mt-8 flex justify-center items-center'>
                        <img src={data.icon} alt="Cloud Icon" className='h-30 w-30'></img>
                    </div>
                </div>
                <div className='w-[50%] py-3 flex flex-col items-center justify-center gap-15'>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='text-6xl'> {data.temperature}°C </p>
                        <p> {data.description} </p>
                        <p> Feels like: {data.feels_like}°C </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-evenly pr-3'>
                <div className='px-10'>
                    <ul className='flex items-center justify-around h-full gap-5'>
                        <li className='flex flex-col items-center'>
                            <div  className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col items-center justify-center hover:scale-105 transition-transform duration-700">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={sunriseLightImage} alt="Sunrise Icon" className="w-6 h-6" />
                                    <span className="text-sm font-medium">Sunrise</span>
                                </div>
                                <div className="text-xl font-semibold">{formatTimeAMPM(data.sunrise, data.timezone)}</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={sunsetLightImage} alt="Sunset Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Sunset</span>
                                </div>
                                <div className="text-xl font-semibold">{formatTimeAMPM(data.sunset, data.timezone)}</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={humidityLightImage} alt="Humidity Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Humidity</span>
                                </div>
                                <div className="text-xl font-semibold">{data.humidity}%</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={windLightImage} alt="Wind Icon" className="w-7 h-7" />
                                    <span className="text-sm font-medium">Wind Speed</span>
                                </div>
                                <div className="text-xl font-semibold">{data.windSpeed} km/h</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='px-10 w-2/10'>
                    <ul className='flex items-center justify-around h-full gap-5'>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={pressureLightImage} alt="Pressure Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Pressure</span>
                                </div>
                                <div className="text-xl font-semibold">{data.pressure} hPa</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={uvLightImage} alt="UV Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">UV Index</span>
                                </div>
                                <div className="text-xl font-semibold">7 (High)</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={visibilityLightImage} alt="Visibility Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Visibility</span>
                                </div>
                                <div className="text-xl font-semibold">{visibilityKm(data.visibility)} km</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={coordinatesLightImage} alt="Coordinates Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Coordinates</span>
                                </div>
                                <div className='flex justify-center text-center'>
                                    <div className="text-md font-semibold">{data.lon}°N, {data.lat}°E</div>      
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default CurrentWeather;