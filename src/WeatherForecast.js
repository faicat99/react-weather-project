import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Wed</div> 
                    <WeatherIcon code="clear-sky-day" className="WeatherForecast-icon" size={34} />
                    <div className="WeatherForecast-temp mt-4">
                        <span className="WeatherForecast-temp-max">19°</span>
                        <span className="WeatherForecast-temp-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}