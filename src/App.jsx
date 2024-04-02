import { useState } from "react";
import { useWeatherData } from "./hooks/useWeatherData";
import GoogleMap from "./components/GoogleMap";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState("");
  const { weatherData, loading, error } = useWeatherData(location);

  console.log(weatherData);
  console.log(loading);
  console.log(error);
  console.log(location);

  const searchLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="app w-full h-[100vh] relative text-white overflow-hidden">
      {/* Input Container */}
      <div className="flex justify-center pt-5">
        <input
          className="input"
          type="text"
          placeholder="Enter Location"
          onChange={searchLocation}
        />
      </div>

      {/* While Data Fetching Show Loader */}
      {loading && <Loader />}

      {/* container */}
      <div className="max-w-[1000px] h-[700px] m-auto px-4 flex items-center flex-col ">
        {/* Top */}
        <div className="top lg:flex lg:flex-row mt-5 p-5 w-[60%] justify-between flex flex-col">
          <div className=" flex items-center lg:pb-0 pb-3">
            {weatherData.name ? (
              <p className="text-3xl font-bold">{weatherData.name}</p>
            ) : (
              <p className="font-semibold">Location</p>
            )}
          </div>

          <div className="lg:pb-0 pb-3">
            <p className="font-semibold">Temp</p>
            <h1 className="text-2xl font-bold">
              {weatherData.main ? <h1>{weatherData.main.temp}°F</h1> : null}
            </h1>
          </div>

          <div className="lg:pb-0">
            <p className="font-semibold">Weather</p>
            {weatherData.weather ? (
              <p className="text-2xl font-bold">
                {weatherData.weather[0].main}
              </p>
            ) : null}
          </div>
        </div>

        {/* Bottom */}
        <div className="top lg:flex lg:flex-row mt-5 p-5 w-[60%] justify-between flex flex-col">
          <div className="lg:pb-0 pb-3">
            <p className="font-semibold">Feels Like</p>
            {weatherData.main ? (
              <p className="text-2xl font-bold">
                {weatherData.main.feels_like}
              </p>
            ) : null}
          </div>
          <div className="lg:pb-0 pb-3">
            <p className="font-semibold">Humidity</p>
            <h1 className="text-2xl font-bold">
              {weatherData.main ? <h1>{weatherData.main.humidity}°F</h1> : null}
            </h1>
          </div>

          <div className="lg:pb-0 pb-3">
            <p className="font-semibold">Wind Speed</p>
            {weatherData.wind ? (
              <p className="text-2xl font-bold">{weatherData.wind.speed}</p>
            ) : null}
          </div>
        </div>
        {/* Google Map */}
        {weatherData && (
          <GoogleMap
            lon={weatherData?.coord?.lon}
            lat={weatherData?.coord?.lat}
          />
        )}
      </div>
    </div>
  );
}

export default App;
