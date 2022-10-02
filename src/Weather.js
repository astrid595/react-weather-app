import React, {useState} from "react";
import Axios from "axios";
import "./Weather.css"

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null); 
    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
    }

    if (ready) {
        return (
            <div className="Weather"> 
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>
                    Wednesday 07:00
                </li>
                <li>
                    Mostly cloudly
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://assets.msn.com/weathermapdata/1/static/svg/72/v2/card_fix_partlysunny/PartlyCloudyNightV2.svg" alt="Mostly cloudly" className="float-left"/>
                        <div className="float-left">
                            <span className="temperature">6</span>
                            <span className="unit">℃</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 72%
                        </li>
                        <li>
                            Wind: 13 km/h
                        </li>
                    </ul>
                </div>
            </div> 
            </div>
        );
    } else {
        const apiKey = "c8116d2b99630d13abef344e372457d3";
        let city = "london";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }




    
}