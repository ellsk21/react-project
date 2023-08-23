import React, {useState} from "react";

import "./Forecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        setForecast(response.data.daily)
        setLoaded(true);
    
    }

    if(loaded){
        console.log(forecast);
        return (
        <div className="weatherForecast">
            <div className="row">
                <div className="col">
                    <ForecastDay data={forecast[0]}/>
                
                </div>
            </div>
        </div>
        )
    } else {
        let apiKey = "65394c1aaf70b9a62t37c04bob3209ea";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
        Axios.get(apiUrl).then(handleResponse);
        return ""
    }
}