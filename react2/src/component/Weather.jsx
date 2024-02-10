import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsWater } from "react-icons/bs";
import { FaWind } from "react-icons/fa";

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
    <div className="flex justify-center mt-20">
      <div className="bg-blue-700 w-[420px] h-[450px] rounded-lg p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center bg-white rounded-full shadow-xl mb-4">
            <input
              className="rounded-l-full py-2  text-xl font-semibold px-4  text-gray-700 leading-tight focus:outline-none"
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
          <div className="flex items-center text-white">
            <BsWater className="mr-2  mt-3 text-white" />
            <p className="text-white">Humidity: {humidity !== null ? `${humidity}%` : "-"}</p>
          </div>
          <div className="flex mt-3 items-center">
            <FaWind className="mr-2  text-white" />
            <p className=" text-white">Wind: {windSpeed !== null ? `${windSpeed} m/s` : "-"}</p>
          </div>
          <div  className="mt-3">
            <p className=" text-white">Temperature: {temperature !== null ? `${temperature} °C` : "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
