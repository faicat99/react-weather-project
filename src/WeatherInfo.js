import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
            <div className="WeatherInfo">
                <div className="row">
                    <div className="col-7">
                        <h1>{props.data.city}</h1>
                        <ul>
                            <li>
                                <span><FormattedDate date={props.data.date}/></span>
                            </li>
                            <li>
                                <span class="text-uppercase">{props.data.description}</span>
                            </li>
                            <li>
                                <span>Humidity: <strong>{props.data.humidity}%</strong></span>
                                {" "} 
                                <span>Wind: <strong>{props.data.wind}km/h</strong></span>
                            </li>        
                        </ul>          
                            </div>
                        <div className="col-5">
                            <div className="clearfix">
                                <div className="temperature-container d-flex justify-content-end">
                                    
                                    <div className="float-left">
                                        <WeatherIcon code={props.data.icon} size={50} />
                                    </div>
                                        
                                        <div className="float-right">
                                            <WeatherTemperature celsius={props.data.temperature} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}