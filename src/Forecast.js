// Forecast.js

import React from "react";

function Forecast({ forecastData }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">5-Day Forecast</h2>
      {forecastData && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black">
          {forecastData.list.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 text-white shadow-2xl"
            >
              <div className="text-xl font-bold mb-2">
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </div>
              <div className="text-lg mb-2">
                {Math.round(item.main.temp_min - 273.15)}°C -{" "}
                {Math.round(item.main.temp_max - 273.15)}°C
              </div>
              <div className="text-gray-500">{item.weather[0].main}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Forecast;
