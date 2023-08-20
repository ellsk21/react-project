import React from "react";
import "./Weather.css"

export default function Weather() {
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
        
        <h1>Mangawhai</h1>
        <ul> 
            <li>Saturday 1:00PM</li>
            <li>Rainy</li>
        </ul>
        <div className="row">
        <div className="col-6">
         <img src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png" atl="Rainy"/>   
         <span className="temp">14</span><span className="units">°C</span>
        </div>
<div className="col-6">
    <ul>
        <li>Precipitation: 33%</li>
        <li>Humidity: 88%</li>
        <li>Wind: 13km/h</li>
    </ul>
</div>
        </div>
        
        
        </div>
)
}