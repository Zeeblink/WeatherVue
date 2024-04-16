// import React, { useState } from "react";

// const HomePage = () => {
//   const [location, setLocation] = useState("");
//   const [weatherData, setWeatherData] = useState(null);

//   const apiKey = "56bfacbd63c5a38cb311d92a94460b9d";

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
//       );
//       const data = await response.json();
//       // Convert temperature from Kelvin to Celsius
//       data.main.temp = kelvinToCelsius(data.main.temp);
//       setWeatherData(data);
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };

//   // Function to convert temperature from Kelvin to Celsius
//   const kelvinToCelsius = (kelvin) => {
//     return kelvin - 273.15;
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <div className="weather-container">
//         <h1 className="text-4xl font-bold">Weather App</h1>
//         <input
//           type="text"
//           placeholder="Enter Location"
//           className="location-input"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//         <button onClick={handleSearch} className="search-button">
//           Search
//         </button>
//         {weatherData && (
//           <div>
//             <div
//               className={`weather-icon ${getWeatherIconClass(
//                 weatherData.weather[0].main.toLowerCase()
//               )}`}
//               alt="Weather Icon"
//             ></div>
//             <p className="temperature">{weatherData.main.temp.toFixed(2)}°C</p>
//             <p className="weather-description">
//               {weatherData.weather[0].description}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Function to determine the weather icon class based on weather condition
// const getWeatherIconClass = (weatherCondition) => {
//   switch (weatherCondition) {
//     case "clouds":
//       return "cloudy";
//     case "rain":
//       return "rainy";
//     case "clear":
//       return "sunny";
//     default:
//       return "";
//   }
// };

// export default HomePage;
