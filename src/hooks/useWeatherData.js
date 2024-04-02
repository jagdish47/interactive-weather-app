import { useEffect, useState } from "react";

export const useWeatherData = (location) => {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setWeatherData(data);
    } catch (error) {
      setError("Error While Fetching Weather Data");
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchWeatherData();
    }, 1000);
  }, [location]);

  return { weatherData, loading, error };
};
