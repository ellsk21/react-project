import React from "react";
import Icon from "./Icon";
import "./Forecast.css"

export default function WeatherForecast() 
 { 
    return (<div className="weatherForecast">
        <div className="row">
            <div className="col">
            <div className="forecastDay">Wednesday</div>  <Icon code="icon"
           />  <span className="tempMin">11</span> <span className="tempMax"><strong>15</strong></span>
            </div>
        </div>
    </div>
    )
}