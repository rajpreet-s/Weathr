import '../components/style/hellouser.css'
import userIcon from '../assets/user-profile.svg';
import WeatherApiContext from "./Contexts/ApiContext";
import { useContext } from 'react';

export default function HelloUser(){
    const {weatherData,setWeatherData} = useContext(WeatherApiContext);
    return(
        <div className='container'>
            <img src={userIcon} alt='User'></img>
            <div className='header-text'> 
                <div className='greet'>Hello,</div>
                <div className='name'>{weatherData.location}, {weatherData.region}</div>
            </div>
        </div>
    )
}