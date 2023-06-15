import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/current.json?key=0605fcd1e9bd4798a9b50041231506&q=auto:ip"
        );
        if (!response.ok) {
          throw new Error("Unable to fetch weather data");
        }
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-white">
      {weatherData && (
        <div className="flex items-center gap-4">
          <img
            src={weatherData.current.condition.icon}
            alt={weatherData.current.condition.text}
          />

          <div>
            <span className="text-3xl">{weatherData.current.temp_c}°C</span>
            <div>
              <span>{weatherData.location.name}, </span>
              <span>{weatherData.current.condition.text}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
