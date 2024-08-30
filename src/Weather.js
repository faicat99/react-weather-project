import React from "react";

import "./Weather.css";

export default function Weather() {
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
                        <h1>Belfast</h1>
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
                            <span className="temperature">18</span> 
                            <span className="unit">°C</span>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}