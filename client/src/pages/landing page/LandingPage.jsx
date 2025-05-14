import React from 'react'
import CurrentWeather from './components/CurrentWeather'

const LandingPage = () => {
  return (
    <>
        <div className='bg-gray-200 p-5 flex flex-col gap-5'>
            <div className="w-full h-96 border-1 rounded-md"> 
                <CurrentWeather />
            </div>
            <div className='flex gap-5'>
                <div className="w-[50%] h-100 border-1 rounded-md"></div>
                <div className="w-[50%] h-100 border-1 rounded-md"></div>
            </div>
        </div>    
    </>
  )
}

export default LandingPage