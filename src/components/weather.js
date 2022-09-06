import React, {useState} from 'react';
import './weather.css';

const austinTX = {
    lat: 30.2672,
    long: -97.7431
};

const nashvilleTN = {
    lat: 36.1627,
    long: -86.7816
};

const istanbulTR = {
    lat: 41.0082,
    long: 28.9784
};

const WeatherModule = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState({
        temp: '',
        humidity: '',
        description: '',
        icon: '',
        alerts: ''
    });
    const[iconURL, setIconURL] = useState('');
    
    
    const url = 'https://api.openweathermap.org/data/3.0/onecall?';
    
    
    
    function getWeather(location) {
        let element = document.getElementById('selection-options');
        element.style.display = 'none';
        let fetchURL;
        switch(location) {
            case 'Austin':
                fetchURL = (url + 'lat=' + austinTX.lat + '&lon=' + austinTX.long);
                break;
            case 'Nashville':
                fetchURL = (url + 'lat=' + nashvilleTN.lat + '&lon=' + nashvilleTN.long);
                break;
            case 'Istanbul':
                fetchURL = (url + 'lat=' + istanbulTR.lat + '&lon=' + istanbulTR.long);
                break;
            default:
                return;
        }
        fetchURL = fetchURL+'&appid='+'5e0d2da11b3661eeff0ffc894ee44978';
        fetch(fetchURL)
          .then((response) => response.json())
          .then((data) => {
              console.log(data);
              setWeather({
                temp: data.current.temp,
                humidity: data.current.humidity,
                description: data.current.weather[0].description,
                icon: data.current.weather[0].icon,
                alerts: data.alerts
              });
              return {
                    temp: data.current.temp,
                    humidity: data.current.humidity,
                    description: data.current.weather[0].description,
                    icon: data.current.weather[0].icon,
                    alerts: data.alerts
              };
          }
          )
          .then((weather) => {
              setIconURL('http://openweathermap.org/img/wn/' + weather.icon + '@2x.png')
            }
        );
    }
    
    function toggleDropDown() {
        let element = document.getElementById('selection-options');
        if(element.style.display === "block") {
            element.style.display = "none";            
        }else{
            element.style.display = "block";
        }
    }
    
    return(
        <div className="weather-app">
            <div className="dropdown">
                <div className="dropdown-container">
                    <div className="visible-row" onClick={() => {toggleDropDown()}}>
                        <span className="current-selection" >{(location === '' ? 'Choose City' : location)}</span>
                        <span className="arrow-button" >▼</span>
                    </div>
                    <div className="selection-options" id="selection-options">
                        <div className="selection-row" id="selection1" onClick={() => {
                            getWeather('Austin');
                            setLocation('Austin');
                        }}>
                        Austin
                        </div>
                        <div className="selection-row" id="selection2" onClick={() => {
                            getWeather('Istanbul');
                            setLocation('Istanbul')
                        }}>
                        Istanbul
                        </div>
                        <div className="selection-row" id="selection3" onClick={() => {
                            getWeather('Nashville')
                            setLocation('Nashville');
                        }}>
                        Nashville
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <h3>Location: {(location === '' ? 'Choose City' : location)}</h3>
                {iconURL === '' ? '' : <img src={iconURL} alt="weather icon" />}
                <p>{(location ==='' ? '' : (Math.round(weather.temp-273)*9/5+32))} ℉ / {(location ==='' ? '' : (Math.round(weather.temp-273)))} ℃</p>
                <p>{weather.description}</p>
                <p>Humidity: {weather.humidity + '%'}</p>
                <p>Alerts: {(weather.alerts === '' ? '' : JSON.stringify(weather.alerts))}</p>
            
            </div>
        </div>
    );
}

export default WeatherModule;