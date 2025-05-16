import React from 'react';

function getDayLabel(forecastDateStr) {
  const forecastDate = new Date(forecastDateStr);
  const today = new Date();

  const forecastMid = new Date(forecastDate.getFullYear(), forecastDate.getMonth(), forecastDate.getDate());
  const todayMid = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const diffInTime = forecastMid - todayMid;
  const diffInDays = diffInTime / (1000 * 60 * 60 * 24);

  if (diffInDays === 0) return "Today";
  if (diffInDays === 1) return "Tomorrow";

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[forecastDate.getDay()];
}


const HourlyForecast = ({data}) => {
  return (
    <div>
        <p className='text-2xl pl-3'> Hourly Forecast </p>
        <div className='px-2 text-white'>
          <div className='h-45 bg-[#1A1B3F] rounded-xl overflow-x-auto'>
            <ul className='h-full flex'>
              {data.slice(0, 16).map((item, index) => (
                <li key={index} className="px-5 flex flex-col text-center justify-around items-center">
                  <p>{getDayLabel(item.time)}</p>
                  <img src={item.icon} alt="weather icon" className="size-15" />
                  <p>{item.temperature}°C</p>
                </li>
              ))}
            </ul>
          </div>                                                  
        </div>
    </div>
  )
}

export default HourlyForecast;