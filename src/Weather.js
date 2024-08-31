import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [ready, SetReady] = useState(false);
    const [temperature, setTemperature] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.temperature.current);
        SetReady(true);
    }

    if (ready) {
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
                        <h1>London</h1>
                        <ul>
                            <li>
                                <span>Friday 21:00</span>
                                , 
                                <span>Sunny</span>
                                </li>
                            <li>
                                <span>
                                    Humidity:<strong> 40%</strong>
                                </span> 
                                {" "} 
                                <span>
                                    Wind: <strong>5 km/h</strong>
                                    </span>
                                    </li>
                        </ul>
                        </div>
                    <div className="col-5">
                        <div className="temperature-container d-flex justify-content-end">
                            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Sunny" />
                            <div>
                            <span className="temperature">{Math.round(temperature)}</span> 
                            <span className="unit">°C</span>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
} else {
    let city = "London";
    const apiKey ="bafb81c036f1dc4bfbb21532bb2ot295";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}