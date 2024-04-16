// CurrentWeather.js
import React from "react";

function CurrentWeather({ data, location }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{location}</h2>
      {data && (
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold mb-2">
            {Math.round(data.main.temp - 273.15)}°C
          </div>
          <div className="text-lg mb-2">{data.weather[0].main}</div>
          <div className="text-sm">{data.weather[0].description}</div>
        </div>
      )}
    </div>
  );
}

export default CurrentWeather;
