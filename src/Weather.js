import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});
    const [city,setCity] = useState(props.defaultCity);
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

    function search() {
        const apiKey ="bafb81c036f1dc4bfbb21532bb2ot295";
        let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    } 

    if (weatherData.ready) {
        return (
            <div className="Weather">
            <header>
                <form onSubmit={handleSubmit} >
                    <input 
                        type="Search" 
                        placeholder="Enter a City..." 
                        className="search-form-input" 
                        autoFocus="on"
                        onChange={handleCityChange} />
                    <input type="submit" value="Search" className="search-form-button"  />
                </form>
            </header>

            <WeatherInfo data={weatherData} />
        </div>
    );
} else {
    search();
    return "Loading...";
}
}