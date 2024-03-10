import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import Card from './Card';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(true); // State to control the visibility of the search bar

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d2620260bc65f1da55df07eafb0b41b`);
      const data = await response.json();
      setWeatherData(data);
      setShowSearchBar(false); // Hide the search bar when weather data is fetched
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="background-image h-screen flex flex-col justify-center items-center">
      <nav className="bg-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10">
        <div className="text-blue-500 font-bold text-xl">Weather App</div>
        <div className="flex items-center gap-8">
          <div className="text-blue-500 font-bold text-xl mr-4 cursor-pointer">Today</div>
          <div className="text-blue-500 font-bold text-xl mr-4 cursor-pointer">Hourly</div>
          <div className="text-blue-500 font-bold text-xl mr-4 cursor-pointer">Weekend</div>
          <div className="text-blue-500 font-bold text-xl cursor-pointer">Monthly</div>
        </div>
        <div className="flex items-center gap-2">
          <div><span className="text-blue-500 font-semibold">More Forecasts</span></div>
          <div className="mb-15"><IoMdArrowDropdown className="text-blue-500" /></div>
          <button className="text-white bg-blue-600 h-8 px-4 py-1 rounded-full">
            Get analysis
          </button>
        </div>
      </nav>
      {showSearchBar && ( 
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center items-center mt-8 relative'>
            <input
              className="rounded-full py-2 pl-10 pr-16 text-xl font-semibold text-gray-700 leading-tight focus:outline-none shadow-lg w-96"
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <button type="submit" className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none">
              <FaSearch />
            </button>
          </div>
        </form>
      )}
      {weatherData && <Card weather={weatherData} city={city} />}
    </div>
  );
};

export default Weather;
