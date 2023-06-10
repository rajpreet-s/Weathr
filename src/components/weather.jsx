import WeatherApiContext from "./Contexts/ApiContext"
import { useContext } from "react"
import './style/body/weather.css'

export default function Weather(){
    const {weatherData} = useContext(WeatherApiContext);

    return(
        <>
            <div className="weather-container">
                <div className="weather-name">
                    <img className="weather-icon" src={weatherData.icon}></img>
                    <div className="weather-name-padding">
                        <div className="weather-bold">Weather</div>
                        <p className="weather-light">What's the Weather</p>
                    </div>
                </div>
                {
                    weatherData != {}?
                    <div>
                        <div className="temp-container">
                            <div >
                                <div className="temp-name">{weatherData.temp}&deg;C</div>
                                <div className="condition-name">{weatherData.condition}</div>
                            </div>
                            <div className="feellike">{weatherData.feelslike}&deg;C</div>
                        </div>
                        <div className="p-v-h-container">
                            <div className="pressure">
                                <div className="pressure-name">Pressure</div>
                                <div className="pressure-text">{weatherData.pressure}mb</div>
                            </div>
                            <div className="visibility">
                                <div className="visibility-name">Visibility</div>
                                <div className="visibility-text">{weatherData.vis_km} km</div>
                            </div>
                            <div className="humidity">
                                <div className="humidity-name">Humidity</div>
                                <div className="humidity-text">{weatherData.humidity}%</div>
                            </div>
                        </div>
                    </div>
                    :null
                }
            </div>
            
        </>
    )
}