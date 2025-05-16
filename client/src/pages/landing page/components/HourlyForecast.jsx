import React from 'react';

const hourlyData =  Array.from({ length: 48 }, (_, i) => {
  const hour = new Date();
  hour.setHours(hour.getHours() + i);
  
  const formattedHour = i === 0 
    ? "now" 
    : hour.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    return {
      temp: `${Math.floor(30 + Math.random() * 10)}°C`,
      image: "img", // You can replace with actual icon paths later
      time: formattedHour
    };
  });

const HourlyForecast = () => {
  return (
    <div>
        <p className='text-2xl pl-3'> Hourly Forecast </p>
        <div className='px-2 text-white'>
          <div className='h-28 bg-[#1A1B3F] rounded-xl overflow-x-auto'>
            <ul className='h-full flex'>
             { hourlyData.map((data, key) => {
               return (
                <li key={key} className="px-5 flex flex-col text-center justify-around">
                  <p>{data.time}</p>
                  <p>{data.image}</p>
                  <p>{data.temp}</p>
                </li>
              );
             })}
            </ul>
          </div>                                                  
        </div>
    </div>
  )
}

export default HourlyForecast;