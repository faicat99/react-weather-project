import React from "react";

import "./Weather.css";

export default function Weather() {
    return (
       <div className="Weather">
        <form>
            <input type="Search" placeholder="Enter a City..." className="search-form-input" />
            <input type="submit" value="Search" className="search-form-button" />
        </form>
        <h1>Belfast</h1>
        <div className="row">
            <div className="col-8">
                <ul>
                    <li>Friday, 18:00</li>
                    <li>Sunny</li>
                    <li>Humidity: 20%</li>
                    <li>Wind: 5 km/h</li>
                    </ul>
                    </div> 
            <div className="col-4">
                <img src="" alt="" />
                18°C
                </div>
            </div>
        </div>
    )
}