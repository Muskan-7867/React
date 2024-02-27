import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsWater } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const getWeather = async (city) => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d2620260bc65f1da55df07eafb0b41b`);
      const data = await res.json();
      setTemperature(data.main.temp);
      setWindSpeed(data.wind.speed);
      setHumidity(data.main.humidity);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="background-image   h-screen">
      
     <nav className="bg-white p-4 flex justify-between items-center">
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
    <button className="text-white bg-blue-700 h-8 px-4 py-1 rounded-full">
  Get analysis
</button>

  </div>
  
</nav>

      <div className="flex justify-center my-24">
        <div className="bg-white w-[380px] h-[420px] rounded-[30px] p-4 ml-4">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center bg-white rounded-full shadow-xl mb-4">
              <input
                className="rounded-l-full py-2 text-xl font-semibold px-4 text-gray-700 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter City Name"
                value={city}
                onChange={handleInputChange}
                style={{ width: "calc(100% - 3.5rem)" }}
              />
              <div className="p-4">
                <button type="submit" className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none">
                  <FaSearch />
                </button>
              </div>
            </div>
          </form>
          <div className="flex justify-center mb-4">
            <img
              className="h-auto w-40 rounded-lg"
              src="src/assets/rainy1.png"
              alt="Weather Icon"
            />
          </div>

          <div className="text-xl font-bold pl-8">
            <div className="flex items-center text-blue-500">
              <BsWater className="mr-2 mt-3 text-blue-500" />
              <p className="text-blue-500">Humidity: {humidity !== null ? `${humidity}%` : "-"}</p>
            </div>
            <div className="flex mt-3 items-center">
              <FaWind className="mr-2 text-blue-500" />
              <p className="text-blue-500">Wind: {windSpeed !== null ? `${windSpeed} m/s` : "-"}</p>
            </div>
            <div className="mt-3">
              <p className="text-blue-500">Temperature: {temperature !== null ? `${temperature} °C` : "-"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
