import React from 'react';

const dailyData = [
  { day: "Mon", tempMax: "38°C", tempMin: "28°C", icon: "img" },
  { day: "Tue", tempMax: "37°C", tempMin: "27°C", icon: "img" },
  { day: "Wed", tempMax: "36°C", tempMin: "26°C", icon: "img" },
  { day: "Thu", tempMax: "35°C", tempMin: "25°C", icon: "img" },
  { day: "Fri", tempMax: "34°C", tempMin: "24°C", icon: "img" },
  { day: "Sat", tempMax: "36°C", tempMin: "26°C", icon: "img" },
  { day: "Sun", tempMax: "37°C", tempMin: "27°C", icon: "img" },
];

const DailyForecast = () => {
  return (
    <div className="px-3">
      <p className="text-2xl">Daily Forecast</p>
      <div className="text-white w-full flex flex-col gap-2">
        {dailyData.map((data, key) => (
          <div key={key} className="bg-[#1A1B3F] rounded-lg p-4 text-center flex items-center justify-between">
            <p className="font-semibold">{data.day}</p>
            <p className="text-sm my-2">{data.icon}</p>
            <p className="text-lg">{data.tempMax}</p>
            <p className="text-sm text-gray-300">{data.tempMin}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;