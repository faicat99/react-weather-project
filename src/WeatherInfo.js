import React from "react";
import FormattedDate from "./FormattedDate";

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
                                    <img 
                                    src={props.data.iconUrl} alt={props.data.description} className="float-left"  />
                                <div>
                                    <div className="float-right">
                                        <span className="temperature">{Math.round(props.data.temperature)}</span> 
                                        <span className="unit">°C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}