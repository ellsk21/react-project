import React, { useState } from "react";
import "./Weather.css"
import axios from "axios";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData ({
            ready: true,
            temperature: response.data.temperature.current,
            city: response.data.city,
            wind: response.data.wind.speed,
            description: response.data.condition.description,
            humidity: response.data.temperature.humidity,
            description: response.data.condition.description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
            date: response.data.time * 1000
         });

         
        
    }

    if (weatherData.ready) {
   const apiKey = "65394c1aaf70b9a62t37c04bob3209ea";
   let city = "Auckland"
   let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric` 
   axios.get(apiUrl).then(handleResponse);
return (
    <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Type a city.." className="form-control" autoFocus="on" />
            </div>
            <div className="col-3">
        <input type="submit" value="Search" className="button w-100" />
        </div>
        </div>
        </form>
        
        <h1>{weatherData.city}</h1>
        <ul> 
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
        <div className="col-6">
         <img src={weatherData.iconUrl} atl={weatherData.description}/>   
         <span className="temp">{Math.round(weatherData.temperature)}</span><span className="units">°C</span>
        </div>
<div className="col-6">
    <ul>
        
        <li>Humidity: {weatherData.humidity}%</li>
        <li>Wind: {Math.round(weatherData.wind)}km/h</li>
    </ul>
</div>
        </div>
        
        
        </div>
)
}else {const apiKey = "65394c1aaf70b9a62t37c04bob3209ea";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric` 
axios.get(apiUrl).then(handleResponse);
return "loading..."
}

}