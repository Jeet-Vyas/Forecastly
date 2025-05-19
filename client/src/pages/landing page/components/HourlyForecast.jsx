import React from 'react';

function formatForecastLabel(datetimeString) {
  const date = new Date(datetimeString);
  const now = new Date();

  const forecastDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const msInDay = 1000 * 60 * 60 * 24;
  const diffInDays = (forecastDate - todayDate) / msInDay;

  let dayLabel;
  if (diffInDays === 0) {
    dayLabel = 'Today';
  } else if (diffInDays === 1) {
    dayLabel = 'Tomorrow';
  } else {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dayLabel = weekdays[date.getDay()];
  }

  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return `${dayLabel} ${hour}:${minute}`;
}

const HourlyForecast = ({data}) => {
  return (
    <div className=' text-white'>
        <p className='text-md md:text-xl p-3'> Hourly Forecast </p>
        <div className='px-2'>
          <div className='md:h-45 bg-white/20 backdrop-blur-xl border border-white/5 shadow-md rounded-xl overflow-x-auto'>
            <ul className='h-full flex'>
              {data.slice(0, 16).map((item, index) => (
                <li key={index} className="w-[90px] px-5 flex flex-col text-center justify-around items-center shrink-0">
                  <p>{formatForecastLabel(item.time)}</p>
                  <img src={item.icon} alt="weather icon" className="size-15" />
                  <p>{parseInt(item.temperature)}°C</p>
                </li>
              ))}
            </ul>
          </div>                                                  
        </div>
    </div>
  )
}

export default HourlyForecast;