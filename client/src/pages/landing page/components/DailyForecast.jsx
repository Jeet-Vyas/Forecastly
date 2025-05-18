import React from 'react';

function getWeekdayOrToday(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  const isSameDate =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (isSameDate) return 'Today';

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return weekdays[date.getDay()];
}

const DailyForecast = ({data}) => {
  return (
    <div className="px-3 text-white">
      <p className="text-2xl">Daily Forecast</p>
      <div className="w-[50%] flex flex-col gap-2">
        {data.map((data, key) => (
          <div key={key} className="bg-[#1A1B3F] rounded-lg p-4 text-center flex items-center justify-between">
            <p className="font-semibold">{data.date.slice(5)}</p>
            <p className="font-semibold">{getWeekdayOrToday(data.date)}</p>
            <img className="size-10" src={data.icon} alt="weather icon" ></img>
            <p className="text-lg">{parseInt(data.maxTemp)}°C</p>
            <p className="text-sm text-gray-300">{parseInt(data.minTemp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;