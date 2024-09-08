import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        return days[day];
    }


    return (
        <div>
        <div className="WeatherForecast-day mt-4">{day()}</div> 
            <WeatherIcon code={props.data.condition.icon} className="WeatherForecast-icon" size={34} />
                <div className="WeatherForecast-temp mt-4 mb-4">
                    <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
                    <span className="WeatherForecast-temp-min">{minTemperature()}</span>
                </div>
        </div>
    );
}