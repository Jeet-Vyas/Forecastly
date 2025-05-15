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

const CurrentWeather = () => {
  return (
    <>
        <div className='h-full flex text-white bg-[#1A1B3F]'>
            <div className='flex flex-row px-8 w-6/10 py-10'>
                <div className='w-[50%] py-3 flex flex-col items-center'>
                    <p className='text-2xl'> Ahmedabad, <span> IN </span></p>
                    <p className='text-sm'>Wednesday, May 14, 2025 | 18:30</p>
                    <div className='h-50 w-50 rounded-[50%] mt-8'>
                        <img src={cloudImage} alt="Cloud Icon"></img>
                    </div>
                </div>
                <div className='w-[50%] py-3 flex flex-col items-center justify-center gap-15'>
                    <div className='flex flex-col gap-2 items-center'>
                        <p className='text-6xl'> 38°C </p>
                        <p> ☀️ Clear sky </p>
                        <p> Feels Like 42°C </p>
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
                                <div className="text-xl font-semibold">06:34 AM</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={sunsetLightImage} alt="Sunset Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Sunset</span>
                                </div>
                                <div className="text-xl font-semibold">07:47 AM</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={humidityLightImage} alt="Humidity Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Humidity</span>
                                </div>
                                <div className="text-xl font-semibold">65%</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={windLightImage} alt="Wind Icon" className="w-7 h-7" />
                                    <span className="text-sm font-medium">Wind Speed</span>
                                </div>
                                <div className="text-xl font-semibold">18 km/h</div>
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
                                <div className="text-xl font-semibold">1012 hPa</div>
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
                                <div className="text-xl font-semibold">10 km</div>
                            </div>
                        </li>
                        <li className='flex flex-col items-center'>
                            <div className="w-36 h-28 rounded-xl bg-white/20 backdrop-blur-sm border border-white/5 shadow-md text-white flex flex-col justify-center items-center p-2">
                                <div className="flex items-center space-x-2 mb-1">
                                    <img src={coordinatesLightImage} alt="Coordinates Icon" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Coordinates</span>
                                </div>
                                <div className="text-md font-semibold">23.0225°N, 72.5714°E</div>
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