import React from 'react';
import { BsWater } from 'react-icons/bs';
import { FaWind, FaTemperatureHigh } from 'react-icons/fa'; // Import FaTemperatureHigh icon

const Card = ({ weather }) => {
  // Extract relevant weather information from the weather data
  const humidity = weather?.main?.humidity;
  const windSpeed = weather?.wind?.speed;
  const temperature = weather?.main?.temp;

  return (
    <div className='flex justify-center items-center bg-white-500 h-screen'>
      <div className='bg-blue-200 p-4 h-[28vw] w-[25vw] rounded-[40px] flex flex-col items-center'>
        
        <h2 className="text-xl font-bold text-blue-500 mb-2">Weather Forecast</h2>
        <div className="flex justify-center"> 
          <img
            className="h-auto w-40 rounded-lg"
            src="src/assets/rainy1.png"
            alt="Weather Icon"
          />
        </div>
        
        <div className="text-xl font-bold  mt-4"> 
          <div className="flex items-center text-blue-500">
            <BsWater className="mr-2 mt-3 text-blue-500" />
            <p className="text-blue-500">Humidity: {humidity !== null ? `${humidity}%` : "-"}</p>
          </div>
          <div className="flex mt-3 items-center">
            <FaWind className="mr-2 text-blue-500" />
            <p className="text-blue-500">Wind: {windSpeed !== null ? `${windSpeed} m/s` : "-"}</p>
          </div>
          <div className="mt-3 flex items-center"> {/* Added temperature icon */}
            <FaTemperatureHigh className="mr-2 text-blue-500" />
            <p className="text-blue-500">Temperature: {temperature !== null ? `${temperature} °C` : "-"}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Card;
