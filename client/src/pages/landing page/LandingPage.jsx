import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import HourlyWeather from './components/HourlyWeather'
import DailyWeather from './components/DailyWeather'

const LandingPage = () => {
  return (
    <>
        <div className='bg-[#D1CFE2] p-5 flex flex-col gap-5'>
            <div className="w-full h-96 border-1 rounded-md"> 
                <CurrentWeather />
            </div>
            <div className="h-40 border-1 rounded-md p-1">
              <HourlyWeather />
            </div>
            <div className="h-100 border-1 rounded-md p-1">
              <DailyWeather />
            </div>
        </div>
    </>
  )
}

export default LandingPage