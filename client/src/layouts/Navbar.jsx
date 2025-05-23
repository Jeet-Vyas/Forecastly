import React from 'react';
import { useState } from 'react';
import { useCity } from '../context/CityContext';

const Navbar = () => {
  const { setCity } = useCity();
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    if(e.key === 'Enter' && input.trim() !== ''){
      setCity(input.trim());
      setInput('');
    }
  };

  return (
    <>
      <nav className="bg-gray-900 sticky top-0 z-20">
        <div className="h-16 w-full px-4 flex justify-between items-center">

          <div className='text-white flex gap-2 items-center'>
            <h1 className='text-md md:text-2xl'> Forecastly </h1>
          </div>
    
          {/* <div className='text-gray-400'>
            <ul className='gap-8 hidden md:flex'>
              <li className='cursor-pointer hover:text-white'>Home</li>
              <li className='cursor-pointer hover:text-white'>Favourite</li>
              <li className='cursor-pointer hover:text-white'>Weather</li>
            </ul>
          </div> */}

          <div className='flex gap-5 md:gap-10'>
            <input type='text' value={input} placeholder='Search City' 
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleInputChange} 
                  className='bg-gray-600 rounded-sm text-white py-1 px-2 w-[180px] md:w-[300px]'></input>
            {/* <div className='bg-gray-500 w-8 h-8 rounded-[50%] flex items-center justify-center text-center text-md cursor-pointer'>A</div> */}
          </div>



        </div>
      </nav>
    </>
  )
}

export default Navbar;