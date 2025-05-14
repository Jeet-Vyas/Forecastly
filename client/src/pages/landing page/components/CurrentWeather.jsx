import React from 'react'

const CurrentWeather = () => {
  return (
    <>
        <div className='h-full flex'>
            <div className='flex flex-col py-5 px-10 bg-gray-600 w-1/3 items-center border-1'>
                <h1 className='text-2xl'> Ahmedabad, <span> IN </span></h1>
                <h6 className='text-sm'>Wednesday, May 14, 2025 | 18:30</h6>
                <div className='h-50 w-50 rounded-[50%] bg-white mt-10'></div>
            </div>
            <div className='flex flex-col py-5 px-10 bg-gray-600 w-1/3 items-center border-1'>

            </div>
            <div className='flex flex-col py-5 px-10 bg-gray-600 w-1/3 items-center border-1'>

            </div>
        </div>
    </>
  )
}

export default CurrentWeather;