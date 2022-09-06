import React from 'react';
import './portfolio.css';

export const Websites = () => {
    return(
        <div id="portfolio-element"> 
            <div className="flexbox-container" >
                <div className="flexbox-title">
                    <h3>Some Websites I've Created</h3>
                </div>
            </div>
            <div className="flexbox-container" >
                <div className="flexbox-item flexbox-item1">
                    <div className="site-image">
                        <img src="media/psat-page.png" alt="psat-website" width="100%" />
                    </div>
                    <div className="img-caption">
                        <p>
                        <strong>Description: </strong>Landing page for online test prep course. Launched July 2022 and built with ReactJS.
                        </p>
                        <p>
                            <strong>Features:</strong> Light/Dark theme and mobile responsive design. Lightweight and fast design. Students can access all information about the course on a simple to navigate layout.
                        </p>
                        <p>
                            <strong>View: </strong><a href="http://143.244.165.0/" target="_blank">Live</a> or <a href="https://github.com/whiteside-daniel/build-2">GitHub Repo</a>
                        </p>
                    </div>
                    
                </div>
                <div className="flexbox-item flexbox-item2">
                    <div className="site-image">
                        <img src="media/danieljwhiteside-site.png" alt="coaching-website" width="100%" />
                    </div>
                    <div className="img-caption">
                        <p>
                        <strong>Description: </strong>Wordpress website for coaching and mindfulness classes. Students could view weekly schedule, find course information, read helpful articles, and book appointments using Squarespace scheduling app.
                        </p>
                        <p>
                            <strong>Features:</strong> Blog with original content, mobile responsive design, beautiful modern look with scrolling animations.
                        </p>
                        <p>
                            <strong>View: </strong><a href="daniel-j-whiteside/index.html" target="_blank">Static HTML</a>
                        </p>
                    </div>
                </div>
                
                <div className="flexbox-item flexbox-item3">
                    <div className="site-image">
                        <img src="media/ebq-landing.png" alt="EBQ-landing-page" width="100%" />
                    </div>
                    <div className="img-caption">
                        <p>
                        <strong>Description: </strong>HTML/Javascript/Bootstrap landing page made for EBQ Marketing. This was a demo page created from scratch based on wireframe and pdf sketches. 
                        </p>
                        <p>
                            <strong>Features:</strong> Mobile responsive design created with Bootstrap, gorgeous design elements, color scheme and font styling.
                        </p>
                        <p>
                            <strong>View: </strong><a href="ebq-landing-page/index.html" target="_blank">Static HTML</a> or <a href="https://github.com/whiteside-daniel/ebq-landing-page" target="_blank">GitHub Repository</a>
                        </p>
                    </div>
                </div>
                
                <div className="flexbox-item flexbox-item4">
                    <div className="site-image">
                        <img src="media/creatrclasses.com-square.png" alt="creatr-classes-landing-page" width="100%" />
                    </div>
                    <div className="img-caption">
                        <p>
                        <strong>Description: </strong>Wordpress website for freelance tutoring and test prep classes. Students coul view weekly schedule, find course information, read helpful articles, and book appointments using Squarespace scheduling app.
                        </p>
                        <p>
                            <strong>Features:</strong> Blog with original content, mobile responsive design, beautiful modern look with scrolling animations.
                        </p>
                        <p>
                            <strong>View: </strong><a href="creatrclasses.com-homepage-html/index.html" target="_blank">Static HTML</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}