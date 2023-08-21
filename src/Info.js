import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";

export default function Info(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
        <ul> 
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row">
        <div className="col-6">
            <Icon code={props.data.icon}
          atl={props.data.description} />   
         <span className="temp">{Math.round(props.data.temperature)}</span><span className="units">°C</span>
        </div>
<div className="col-6">
    <ul>
        
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)}km/h</li>
    </ul>
</div>
        </div>
        </div>
    )
}