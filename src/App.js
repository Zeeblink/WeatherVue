// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const API_KEY = "56bfacbd63c5a38cb311d92a94460b9d";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("Lagos");
  const [searchLoading, setSearchLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [location, setLocation] = useState("Current Weather");

  // Event handler to update input value
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSearchLoading(true);
        const currentWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=${API_KEY}`
        );
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchQuery}&appid=${API_KEY}`
        );

        setCurrentWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);
        setLoading(false);
        setSearchLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setSearchLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = () => {
    setLoading(true);
    setSearchQuery(inputValue.trim());
    setLocation(inputValue.trim());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen text-white">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Weather Vue</h1>
        <div className="max-w-lg mx-auto mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
            placeholder="Enter a location..."
          />
          <button
            onClick={handleSearch}
            disabled={searchLoading}
            className="bg-gray-800 text-white px-4 py-2 rounded-md w-full mt-2"
          >
            {searchLoading ? "Searching..." : "Search"}
          </button>
        </div>

        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            <CurrentWeather data={currentWeather} location={location} />
            <Forecast forecastData={forecast} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
