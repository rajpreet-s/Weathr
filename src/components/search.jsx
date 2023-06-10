import { useState, useContext,useEffect } from "react";
import {DebounceInput} from 'react-debounce-input'
import WeatherApiContext from "./Contexts/ApiContext";
import '../components/style/search.css'
import bellIcon from '../assets/bell-icon.svg'
import toast, { Toaster } from 'react-hot-toast';

//fetching url using search
let url = new URL('https://weatherapi-com.p.rapidapi.com/forecast.json')
const API_KEY = '7ea03f4e0amsh7b15aaf412fe179p1ac750jsn0e53caccf6b7'

async function weatherFetch(location){
    url.searchParams.set('q',location);
    url.searchParams.set('days',3);
    url.searchParams.set('aqi','yes');
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7ea03f4e0amsh7b15aaf412fe179p1ac750jsn0e53caccf6b7',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        return error;
    }
}

//search functionality
export default function Search(){
    const [searchValue, setSearchValue] = useState(null);
    const {weatherData,setWeatherData} = useContext(WeatherApiContext);
    const {forecastData,setForecastData} = useContext(WeatherApiContext);

    const handleChange = (e)=>{
        setSearchValue(e.target.value);
    }
    const handleSubmit = (e)=>{

        if(e.key !== 'Enter' || searchValue === null) return;

        weatherFetch(searchValue)
        .then(value => {
            if(value.hasOwnProperty('error'))
                throw value.error.message;
            setWeatherData(()=>{
                const data = {
                    location: value.location.name,
                    country: value.location.country,
                    region:value.location.region,
                    temp: Math.floor(value.current.temp_c),
                    condition: value.current.condition.text,
                    humidity: value.current.humidity,
                    wind: value.current.wind_kph,
                    uv:value.current.uv,
                    pressure:value.current.pressure_mb,
                    feelslike:value.current.feelslike_c,
                    vis_km:value.current.vis_km,
                    icon:value.current.condition.icon,
                    aiq:Math.floor(value.current.air_quality.o3),
                    wind_dir:value.current.wind_dir
                }  
                return data;
            })
            setForecastData(()=>{
                const data = value.forecast.forecastday.map((day)=>{
                    return {
                        date: new Date(day.date_epoch*1000).getDate(),
                        month:new Date(day.date_epoch*1000).getMonth(),
                        maxTemp: Math.floor(day.day.maxtemp_c),
                        minTemp: Math.floor(day.day.mintemp_c),
                        condition: day.day.condition.text,
                        humidity: day.day.avghumidity,
                        icon:day.day.condition.icon,
                        astro:{
                            sunrise: day.astro.sunrise,
                            sunset: day.astro.sunset,
                        },
                        hours:{
                            morning:{
                                    time: day.hour[7].time,
                                    temp: day.hour[7].temp_c,
                                    condition: day.hour[7].condition.text,
                                    humidity: day.hour[7].humidity,
                                    wind: day.hour[7].wind_kph,
                                },
                            afternoon:{
                                    time: day.hour[13].time,
                                    temp: day.hour[13].temp_c,
                                    condition: day.hour[13].condition.text,
                                    humidity: day.hour[13].humidity,
                                    wind: day.hour[13].wind_kph,
                                },
                            evening:{
                                    time: day.hour[19].time,
                                    temp: day.hour[19].temp_c,
                                    condition: day.hour[19].condition.text,
                                    humidity: day.hour[19].humidity,
                                    wind: day.hour[19].wind_kph,
                                },
                            night:{
                                    time: day.hour[1].time,
                                    temp: day.hour[1].temp_c,
                                    condition: day.hour[1].condition.text,
                                    humidity: day.hour[1].humidity,
                                    wind: day.hour[1].wind_kph,
                                }
                            }
                        }
                    })
                return data;
            })
        })
        .catch(err => console.log(`Got this ERROR: ${err}`));
    }
    const toastMe = () =>{
        return toast('Just a Mimick',{
            icon:'😜'
        })
    }
    useEffect(()=>{
        weatherFetch('New Delhi')
        .then(value => {
            if(value.hasOwnProperty('error'))
                throw value.error.message;
            setWeatherData(()=>{
                const data = {
                    location: value.location.name,
                    country: value.location.country,
                    region:value.location.region,
                    temp: Math.floor(value.current.temp_c),
                    condition: value.current.condition.text,
                    humidity: value.current.humidity,
                    wind: value.current.wind_kph,
                    uv:value.current.uv,
                    pressure:value.current.pressure_mb,
                    feelslike:value.current.feelslike_c,
                    vis_km:value.current.vis_km,
                    icon:value.current.condition.icon,
                    aiq:Math.floor(value.current.air_quality.o3),
                    wind_dir:value.current.wind_dir
                }  
                return data;
            })
            setForecastData(()=>{
                const data = value.forecast.forecastday.map((day)=>{
                    return {
                        date: new Date(day.date_epoch*1000).getDate(),
                        month:new Date(day.date_epoch*1000).getMonth(),
                        maxTemp: Math.floor(day.day.maxtemp_c),
                        minTemp: Math.floor(day.day.mintemp_c),
                        condition: day.day.condition.text,
                        humidity: day.day.avghumidity,
                        icon:day.day.condition.icon,
                        astro:{
                            sunrise: day.astro.sunrise,
                            sunset: day.astro.sunset,
                        },
                        hours:{
                            morning:{
                                    time: day.hour[7].time,
                                    temp: day.hour[7].temp_c,
                                    condition: day.hour[7].condition.text,
                                    humidity: day.hour[7].humidity,
                                    wind: day.hour[7].wind_kph,
                                },
                            afternoon:{
                                    time: day.hour[13].time,
                                    temp: day.hour[13].temp_c,
                                    condition: day.hour[13].condition.text,
                                    humidity: day.hour[13].humidity,
                                    wind: day.hour[13].wind_kph,
                                },
                            evening:{
                                    time: day.hour[19].time,
                                    temp: day.hour[19].temp_c,
                                    condition: day.hour[19].condition.text,
                                    humidity: day.hour[19].humidity,
                                    wind: day.hour[19].wind_kph,
                                },
                            night:{
                                    time: day.hour[1].time,
                                    temp: day.hour[1].temp_c,
                                    condition: day.hour[1].condition.text,
                                    humidity: day.hour[1].humidity,
                                    wind: day.hour[1].wind_kph,
                                }
                            }
                        }
                    })
                return data;
            })
        })
    },[])
    return(
        <>
            <div className="search">
                <DebounceInput
                    minLength={2}
                    value={searchValue}
                    debounceTimeout={400} 
                    placeholder="Search city ..."
                    onChange={handleChange} 
                    onKeyDown={handleSubmit} 
                />
            </div>
            <img className="bell-icon" src={bellIcon} alt="Bell" onClick={toastMe}></img>
            <Toaster position="top-right" reverseOrder={false}/>
        </>
    )
}