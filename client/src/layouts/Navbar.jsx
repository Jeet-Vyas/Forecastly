import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 sticky top-0 z-1">
        <div className="h-14 w-full px-4 flex justify-between items-center">

          <div className='text-white flex gap-2 items-center'>
            <div className='bg-white h-8 w-8'></div>
            <h2> Forecastly </h2>
          </div>
    
          <div className='text-gray-400'>
            <ul className='flex gap-8'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Dashboard</li>
              <li className='cursor-pointer'>Weather</li>
            </ul>
          </div>

          <div className='flex gap-10'>
            <input type='text' placeholder='Search City' className='bg-gray-600 rounded-sm text-white py-1 px-2'></input>
            <img className='bg-white w-8 h-8 rounded-[50%]'></img>
          </div>



        </div>
      </nav>
    </>
  )
}

export default Navbar;