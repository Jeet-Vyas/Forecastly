import React from 'react'

const HourlyWeather = () => {
  return (
    <div>
        <p className='text-2xl pl-3'> Hourly Forecast </p>
        <div className='px-2 text-white'>
          <div className='h-28 bg-[#1A1B3F] rounded-xl'>
            <ul className=''>
              <li className='flex flex-col w-25 h-22 bg-black justify-evenly items-center'>
                <h1>38°C</h1>
                <h1>Image</h1>
                <h1>now</h1>
              </li>
            </ul>
          </div>                                                  
        </div>
    </div>
  )
}

export default HourlyWeather