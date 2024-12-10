import React, { useState, useEffect } from "react";
import { fetchWeatherData } from "../services/api";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async (lat, lon) => {
      try {
        const data = await fetchWeatherData(lat, lon); // Fetch by coordinates
        setWeather(data);
      } catch (err) {
        setError(err.message);
      }
    };

    const fetchLocationAndWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`); // Check coordinates
            getWeather(latitude, longitude);
          },
          (err) => {
            setError("Error getting location: " + err.message);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    fetchLocationAndWeather();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!weather) return <div>Loading...</div>;

  // Construct the icon URL
  const iconCode = weather.weather[0].icon; // Get the icon code from the API response
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`; // Construct the URL
  console.log(weather);

  return (
    <div className="p-1 rounded" style={{ maxWidth: "35rem",backgroundColor: "rgb(193 193 193)" }}>
      <div
        className="m-3"
        style={{ maxWidth: "18rem", display: "inline-block" }}
      >
        <h2>Weather in {weather.name}</h2>
        <img src={iconUrl} alt={weather.weather[0].description} />
      </div>
      <div
        className="m-3"
        style={{ maxWidth: "17rem", display: "inline-block" }}
      >
        <p style={{ fontSize: "1.1em" }}>Temperature: {weather.main.temp}°C</p>
        <p style={{ fontSize: "1.1em" }}>
          Description: {weather.weather[0].description}
        </p>
      </div>
    </div>
  );
};
