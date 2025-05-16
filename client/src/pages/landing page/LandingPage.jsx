import React from 'react'
import CurrentWeather from './components/CurrentWeather'
import HourlyForecast from './components/HourlyForecast'
import DailyForecast from './components/DailyForecast'

const LandingPage = () => {
  return (
    <>
        <div className='bg-[#D1CFE2] p-5 flex flex-col gap-5'>
            <div className="w-full h-96 border-1 rounded-md"> 
                <CurrentWeather />
            </div>
            <div className="h-40 border-1 rounded-md p-1">
              <HourlyForecast />
            </div>
            <div className="h-full border-1 rounded-md p-1">
              <DailyForecast />
            </div>
        </div>
    </>
  )
}

export default LandingPage