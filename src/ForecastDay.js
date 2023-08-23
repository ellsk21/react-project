import React from "react";
import Icon from "./Icon";

export default function ForecastDay (props) {
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

        let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    
    return (
        <div>
        <div className="forecastDay">{day()}</div> 
         <Icon code={props.data.condition.icon}  /> 
          <br />
          <div className="WeatherForecast-temps">
                <span className="tempMax"><strong>{maxTemperature()}</strong></span>
                <span className="tempMin">{minTemperature()}</span>
                </div></div>
    );
}
