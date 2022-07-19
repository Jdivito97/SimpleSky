import React, { useState } from "react";
import axios from "axios";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import Fab from "@mui/material/Fab";

function Weather(props) {
  const [weather, setWeather] = useState({});
  const [render, setRender] = useState(false);
  const [cityName, setCityName] = useState("");
  const apiKey = "e039b507f6d49ae327e0ffd2fd482a67";

  function handleInputChange(event) {
    setCityName(event.target.value);
    event.preventDefault();
  }

  function handleClick(event) {
    console.log(event);
    if (event.key === "Enter" || event.type === "click") {
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
        )
        .then((response) => {
          setWeather(response.data);
          setRender(true);
        })
        .catch(function (error) {
          alert("City not found, please check your spelling and try again");
        });
      event.preventDefault();
    }
  }

  return (
    <>
      <div className="cityInput">
        <form className="weatherSearch">
          <input
            onKeyDown={handleClick}
            value={cityName}
            onChange={handleInputChange}
            type="text"
            placeholder="Enter the name of a city"
            name="city"
          ></input>
          <Fab type="button" onClick={handleClick} className="fab">
            <DoubleArrowIcon />
          </Fab>
        </form>
      </div>
      {render ? (
        <div className="currentWeather">
          <h1 className="weatherCity">{weather.name}</h1>
          <p className="condition">{weather.weather[0].main}</p>

          <p className="tempMain">{weather.main.temp}°F</p>
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          ></img>
          <br></br>
          <p className="tempMin">{weather.main.temp_min}°F low</p>
          <p className="tempMax">{weather.main.temp_max}°F high</p>
          <p className="humidity">{weather.main.humidity}% humidity</p>
        </div>
      ) : null}
    </>
  );
}

export default Weather;
