import Search from "./search"
import HelloUser from "./hellouser";
import './style/mainscreen.css'
import Weather from "./weather";
import AirQuality from "./airquality";

export default function MainScreen(){
    

    return(
        <>
        <div className="header">
            <HelloUser></HelloUser> 
            <div className="search-header">
                <Search/>
            </div>
        </div>
        <div className="body-container">
            <Weather/>  
            <AirQuality/>   
        </div>
        </>
    )
}