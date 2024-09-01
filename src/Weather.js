import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            temperature: response.data.temperature.current,
            description: response.data.condition.description,
            wind: response.data.wind.speed,
            humidity: response.data.temperature.humidity,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <header>
                <form>
                    <input type="Search" placeholder="Enter a City..." className="search-form-input" />
                    <input type="submit" value="Search" className="search-form-button" />
                </form>
            </header>

            <WeatherInfo data={weatherData} />
        </div>
    );
} else {
    const apiKey ="bafb81c036f1dc4bfbb21532bb2ot295";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}