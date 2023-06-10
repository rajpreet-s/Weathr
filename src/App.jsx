import './App.css'
import MainScreen from "./components/mainscreen";
import Sidescreen from './components/sidescreen';
import WeatherApiContext from "./components/Contexts/ApiContext"
import { useState,useEffect } from "react"
import Loader from './components/loader';

export default function App(){
  const [weatherData, setWeatherData] = useState({});
  const [forecastData, setForecastData] = useState([])
  const [isLoader,setIsLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return(
    <>
    {
      isLoader? <Loader/>:<>
      <WeatherApiContext.Provider value={{weatherData,setWeatherData,forecastData,setForecastData}}>
        <div className='container-screen'>
          <div className='mainscreen'>
            <MainScreen/>
          </div>
          <div className='sidescreen'>
            <Sidescreen/>
          </div>
        </div>
      </WeatherApiContext.Provider>
    </>
    }
    </>
    
  )
}