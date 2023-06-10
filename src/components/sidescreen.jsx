import '../components/style/sidescreen.css'
import WeatherApiContext from "./Contexts/ApiContext";
import { useContext } from 'react';
import sunIcon from '../assets/sun.svg'

export default function Sidescreen(){
    const {weatherData,setWeatherData} = useContext(WeatherApiContext);
    const {forecastData} = useContext(WeatherApiContext);

    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September",   "October", "November", "December"
    ];
    
    return(
        <>  
            <div className='side-container'>
                <div className='side-header'>
                    <div>
                        <div className='sun'>{weatherData.country}</div>
                        <div className='location-name'>{weatherData.location}, {weatherData.region}</div>
                    </div>
                    <div className="temp-name-orange">{weatherData.temp}&deg;C</div>
                </div>
                <div className='uv-container'>
                    <img src={sunIcon} alt='sun' className='sun-image'></img>
                    <div className='uv-risk-container'>
                        <div className='uv-condition-container'>
                            <div className='uv-data'>{weatherData.uv} UVI</div>
                            <div className='uv-condition'>{(weatherData.uv <= 2)?
                                    'Low':
                                        ((weatherData.uv <=7)?
                                            'Moderate':
                                                'High')}</div>
                        </div>
                        <div className='uv-risk'>{(weatherData.uv <= 2)?
                                'Low':
                                    ((weatherData.uv <=7)?
                                        'Moderate':
                                            'High')} risk from UV rays</div>
                    </div>
                </div>
                <div className='forecast-header'>Weather Prediction</div>
                {   
                    forecastData != []?
                    <>
                    {
                        forecastData.map((value,index)=>{
                            
                            return(
                                <div className='forecast-container' key={index}>
                                    <div className='forecast-single'>
                                        <img src={value.icon} alt='icon' className='forecast-icon'></img>
                                        <div className='forecast-date-container'>
                                            <div className='forecast-date'>{monthNames[value.month]} {value.date}</div>
                                            <div className='forecast-condition'>{value.condition}</div>
                                        </div>
                                        <div className='forecast-temp'>{value.maxTemp}&deg;C / {value.minTemp}&deg;C</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>:null
            }
            </div>
        </>
    )
}