import WeatherApiContext from "./Contexts/ApiContext"
import { useContext } from "react"
import './style/body/airquality.css'
import windIcon from '../assets/weather/wind.gif'

export default function AirQuality(){
    const {weatherData} = useContext(WeatherApiContext);
    const windDirection = {
        "N": "North Wind",
        "NNE": "North-North-East Wind",
        "NE": "North-East Wind",
        "ENE": "East-North-East Wind",
        "E": "East Wind",
        "ESE": "East-South-East Wind",
        "SE": "South-East Wind",
        "SSE": "South-South-East Wind",
        "S": "South Wind",
        "SSW": "South-South-West Wind",
        "SW": "South-West Wind",
        "WSW": "West-South-West Wind",
        "W": "West Wind",
        "WNW": "West-North-West Wind",
        "NW": "North-West Wind",
        "NNW": "North-North-West Wind"
    }
    const aiqPercentage = Math.floor((weatherData.aiq/500)*100);
    return(
        <>
            <div className="air-container">
                <div className="air-name">
                    <img className="air-icon" src={windIcon}></img>
                    <div className="air-name-padding">
                        <div className="air-bold">Air Quality</div>
                        <p className="air-light">Main Pollution</p>
                    </div>
                </div>
                <div>
                        <div className="wind-container">
                            <div className="positon-container">
                                <div className="wind-name">{weatherData.aiq}</div>
                                <div className="wind-dir-name">{windDirection[weatherData.wind_dir]}</div>
                            </div>
                            <div className="aqi">AQI</div>
                        </div>
                        <div className="slide-container">
                            <div className="label-container">
                                <div className="slide-first">Good</div>
                                <div className="slid-end">Hazardous</div>
                            </div>
                            <input type="range" min="1" max="100" value={aiqPercentage} className="slider" disabled/>
                        </div>
                </div>
            </div>
        </>
    )
}