import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "YOUR_API_KEY"; // Replace with your WeatherAPI key
  const CITY = "London"; // Change as needed

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${CITY}`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="card p-4 text-center">
      {weather ? (
        <div>
          <h3>
            {weather.location.name}, {weather.location.country}
          </h3>
          <p>Temperature: {weather.current.temp_c}°C</p>
          <p>Condition: {weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="Weather Icon" />
          <p>Wind: {weather.current.wind_kph} km/h ({weather.current.wind_dir})</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default Weather;