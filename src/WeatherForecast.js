import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response) {
        console.log(response.data);
    }

    console.log(props);

    const apiKey ="bafb81c036f1dc4bfbb21532bb2ot295";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

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