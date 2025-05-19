import React from 'react';
import { useEffect, useState } from 'react';
import sunImage from '../../../assets/sun.png';

function formatTimeAMPM(timestamp, timezone) {
    const totalMilliseconds = (timestamp + timezone) * 1000;
    const date = new Date(totalMilliseconds);
  
    // Extract hours and minutes using UTC methods
    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  
    return `${hours}:${minutes} ${ampm}`;
}

const SunPath = ({data}) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const sunrise = data.sunrise;
    const sunset = data.sunset;

    useEffect(() => {
        const now = Math.floor(Date.now() / 1000); // current time in UNIX seconds
        const duration = sunset - sunrise;
        const elapsed = now - sunrise;

        const progress = Math.min(Math.max(elapsed / duration, 0), 1); // clamp 0 to 1

        const centerX = 150;
        const centerY = 130;
        const radius = 110;
        const angle = Math.PI * progress;

        const x = centerX + radius * Math.cos(angle - Math.PI);
        const y = centerY + radius * Math.sin(angle - Math.PI);

        setPosition({ x, y });
    }, [sunrise, sunset]);

  return (
    <div className="px-3 text-white">
      <p className="text-md md:text-xl">Daylight Arc</p>
        <div className="flex justify-center items-center px-3 rounded-xl bg-white/20 backdrop-blur-xl border border-white/5 shadow-md">
        <svg width="300" height="200" viewBox="0 0 300 150" className='p-2'>
            <path
            d="M 40 130 A 110 110 0 0 1 260 130"
            stroke="#FDB813"
            strokeWidth="3"
            fill="none"
            />
            <circle cx="40" cy="130" r="4" fill="#FFD700" />
            <circle cx="260" cy="130" r="4" fill="#FFA500" />
            <image 
                href={sunImage} 
                x={position.x - 12} 
                y={position.y - 12} 
                width="24" 
                height="24" 
            />

            <text x="150" y="40" textAnchor="middle" fontSize="12" fill="#fff">
             Noon
            </text>

            <text x="40" y="150" fontSize="12" textAnchor="middle" fill="#fff">
                <tspan x="40" dy="0">{formatTimeAMPM(sunrise, data.timezone)}</tspan>
                <tspan x="40" dy="12">Sunrise</tspan>
            </text>
            <text x="260" y="150" fontSize="12" textAnchor="middle" fill="#fff">
                <tspan x="260" dy="0">{formatTimeAMPM(sunset, data.timezone)}</tspan>
                <tspan x="260" dy="12">Sunset</tspan>
            </text>
        </svg>
        </div>
    </div>
  );
};

export default SunPath;
