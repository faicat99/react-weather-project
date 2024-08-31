import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: "Friday 18:00",
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
            <div className="WeatherInfo">
                <div className="row">
                    <div className="col-7">
                        <h1>{weatherData.city}</h1>
                        <ul>
                            <li>
                                <span>{weatherData.date}</span>
                                , {" "}
                                <span className="text-capitalize">{weatherData.description}</span>
                                </li>
                            <li>
                                <span>
                                    Humidity:<strong>{weatherData.humidity}%</strong>
                                </span> 
                                {" "} 
                                <span>
                                    Wind: <strong>{weatherData.wind}km/h</strong>
                                    </span>
                                    </li>
                                </ul>
                            </div>
                        <div className="col-5">
                            <div className="clearfix">
                                <div className="temperature-container d-flex justify-content-end">
                                    <img 
                                    src={weatherData.iconUrl} alt={weatherData.description} className="float-left"  />
                                <div>
                                    <div className="float-right">
                                        <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                                        <span className="unit">°C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} else {
    const apiKey ="bafb81c036f1dc4bfbb21532bb2ot295";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${props.defaultcity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}