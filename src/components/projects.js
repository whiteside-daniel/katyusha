import React from 'react'
import WeatherModule from './weather.js';

const Projects = () => {
    return(
        <div id="portfolio-element"> 
                    <div className="flexbox-container" >
                        <div className="flexbox-title">
                            <h3>Web Projects</h3>
                        </div>
                    </div>
                    
                    <div className="flexbox-container" >
                        <div className="flexbox-item">
                            <div className="weather-app">
                                <h3>Simple Weather</h3>
                                <p>A simple weather app. You can check the weather in some of my favorite cities across the globe. Build with OpenWeather API</p>
                                <WeatherModule />
                            </div>
                        </div>
                        
                        <div className="flexbox-item">
                            <div className="weather-app">
                                <h3>Play Pong</h3>
                                <img src="media/pong-img.png" alt="pong-screenshot" width="90%" />
                                <p>A simple recreation of the classic Pong. Game design by Kyle at WebDevSimplified. <a href="pong/pong.html" target="_blank">Play Pong</a></p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
    );
}

export default Projects;