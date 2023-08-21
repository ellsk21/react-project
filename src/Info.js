import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import WeatherTemperature from "./WeatherTemperature"

export default function Info(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
        <ul> 
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-10">
        <div className="col-6">
            <div className="d-flex">
            <Icon code={props.data.icon}
           />  
          <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature}/> 
          </div>
        </div>
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