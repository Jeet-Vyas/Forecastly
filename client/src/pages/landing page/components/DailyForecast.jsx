import React from 'react';

function getWeekdayOrToday(dateString) {
  const date = new Date(dateString);
  const today = new Date();

  const isSameDate =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  if (isSameDate) return 'Today';

  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  return weekdays[date.getDay()];
}

const DailyForecast = ({data}) => {
  return (
    <div className="px-3 text-white">
      <p className="text-md md:text-xl">Daily Forecast</p>
      <div className="flex flex-col gap-2">
        {data.map((data) => (
          <div className="bg-white/20 backdrop-blur-xl border border-white/5 shadow-md rounded-lg p-4 text-center flex items-center justify-between">
            <p className="font-semibold">{data.date.slice(5,7)}/{data.date.slice(8)}</p>
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