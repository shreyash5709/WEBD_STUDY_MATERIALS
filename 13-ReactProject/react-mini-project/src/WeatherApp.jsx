import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import "./weatherApp.css"


export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Lucknow",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "Haze"
    });  

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div className="weatherApp">
            <h2>Weather app by Shreyash</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}