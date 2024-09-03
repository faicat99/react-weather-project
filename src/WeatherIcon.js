import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
    const codeMapping = {
        "clear-sky-day": "CLEAR_DAY",
        "clear-sky-night": "CLEAR_NIGHT",
        "few-clouds-day": "CLOUDY",
        "few-clouds-night": "CLOUDY",
        "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
        "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
        "broken-clouds-day": "CLOUDY",
        "shower-rain-day": "RAIN",
        "shower-rain-night": "RAIN",
        "snow-day": "SNOW",
        "snow-night": "SNOW",
        "mist-day": "FOG",
        "mist-night": "FOG",    
    };
    
    return (
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#818181"
        size={props.size}
        animate="true"
      />    
    );
}
