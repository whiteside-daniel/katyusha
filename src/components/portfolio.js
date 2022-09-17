import React from 'react';
import './portfolio.css';
import WeatherModule from './weather.js';

const Portfolio = (props) => {
    
    switch(props.page) {
        
//home page
        case 'home':
            return(
                <div className="home-container" id="homepage-container">
                    <div className="home-title">
        
                    </div>
                    
                    <div className="home-slide" id="language-slide">
                        <div className="slide-caption">
                            <p>
                                Daniel designs and builds beautiful websites - from scratch, from templates, and everything in between.
                                Daniel is currently the owner and lead director for Creatr Classes - a small association of teachers dedicated to providing STEM education to students of all ages.
                            </p><br />
                            <p>
                                Daniel got started with technology at a young age. At 11 years old he read "Teach Yourself C in 21 days." While it may have taken slightly longer than 21 days, he eventually got a C compiler and linker up and running and wrote his first program on an old Hewlett Packard PC tower.
                            </p><br />
                            <p>
                                Since then, Daniel has received a broad education in many technological fields: he has studied Java, Python, C++, Basic, HTML, CSS, JavaScript, computer repair, and robotics. In addition, Daniel loves mathamtics, physics, carpentry, music, and psychology. 
                            </p><br />
                        </div>
                    </div>
                    
                    <div className="home-slide" id="language-slide">
                        <div className='slide-img'>
                            <img src='media/slide-lang.png' width="100%" />
                        </div>
                        <div className="slide-caption">
                            <p>
                                Daniel has built dozens of sites and provided maintence and assistance for small businesses, creative professionals, friends, and family.
                            </p><br />
                            <p>
                                Daniel has designed, built and maintained web resources that provide real value to customers, including paid membership sites, online course platforms, subscription sites, and producing digital content for unified marketing approaches.
                            </p><br />
                            <p>
                                Daniel's favorite development framework is React, and he relies heavily on JavaScript. Everything on this site was made with React.
                            </p>
                        </div>
                    </div>
                    
                    
                    <div className="home-slide" id="hard-skills-slide">
                        <div className='slide-img'>
                            <img src='media/slide-hard-skills.png' width="100%" />
                        </div>
                        <div className="slide-caption">
                            <p>
                                Daniel spends a lot of time learning technical skills and enjoys studying web design and pure mathematics. From online courses and single-page websites to modeling 8-dimensional objects with python - Daniel likes to code it all!
                            </p>
                            <p>
                                You can see some of his most recent web projects on the 'Web' tab. 
                            </p>
                        </div>
                    </div>
                    
                    
                    <div className="home-slide" id="soft-skills-slide">
                        <div className='slide-img'>
                            <img src='media/slide-soft-skills.png' width="100%" />
                        </div>
                        <div className="slide-caption">
                            <p>
                                In 2011 Daniel took a hiatus from his technical education to take a dive into his own personal growth and spiritual development. He's spent over a decade learning and practiciing mindfulness, Zen and Tibetan meditation, yoga, spent hundreds of hours in therapy and coaching, and taken surveys of psychological literature related to attachment theory, cognitive development, and personal wellbeing. 
                            </p>
                            
                            <div id="quote">
                                <p>
                                A Note from Daniel:
                                </p>
                                <p>
                                    "Taking a break from my technical education to work on myself was the best decision I ever made, and completely changed the trajectory of my life. It was impossible to see at the time how it would make sense, but looking backwards I can see how the pieces of my life fit together. 
                                </p>
                                <p>
                                    Science and technology are incredibly powerful tools inspired by, guided, and directed by the aims of the people who use them. If we have learned anything from the last 100 years of history, it’s this - intelligence is not the same as wisdom: we have discovered that we are sufficiently intelligent to destroy ourselves, but it is yet to be seen if we are wise enough not to do it. 
                                </p>
                                <p>
                                    In retrospect it’s clear to me that I left the university to look for wisdom. Now that I have connected with various wisdom traditions, I am able to show up more fully in my technical roles and contribute to society in a healthy, sustainable way."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        
//portfolio page
        case 'websites':
            return (
                <div id="portfolio-element"> 
                    <div className="flexbox-container" >
                        <div className="flexbox-title">
                            <h3 align="center">Websites</h3>
                            <p>
                                General Principles for site design: 
                                <ul>
                                    <li>Clean - build websites that are clean and easy to navigate</li>
                                    <li>Simple - make the design and code as simple as possible, but no less</li>
                                    <li>Maitainable - make the code easy to update and maintain</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="flexbox-container" >
                        <div className="flexbox-item flexbox-item1">
                            <div className="site-image">
                                <img src="media/mybrary-preview.png" alt="mybrary-website" width="100%" />
                            </div>
                            <div className="img-caption">
                                <p>
                                <strong>Description: </strong>Mybrary is a full-stack library project where I practiced my skills building an app with Node.js, Express, and MongoDB.
                                </p>
                                <p>
                                    <strong>Features:</strong> Fully functional backend server with MongoDB database functionality. You can add/modify/delete authors and books, and search for previously added books/authors with database functions. Preloaded with some of my favorite books. 
                                </p>
                                <p>
                                    <strong>View: </strong><a href="https://mybrary-whiteside.herokuapp.com/" target="_blank">Live</a> or <a href="https://github.com/whiteside-daniel/Mybrary" target="_blank">GitHub Repo</a>
                                </p>
                            </div>
                            
                        </div>
                        <div className="flexbox-item flexbox-item2">
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
                                    <strong>View: </strong><a href="psat-2022/index.html" target="_blank">Live</a> or <a href="https://github.com/whiteside-daniel/build-2">GitHub Repo</a>
                                </p>
                            </div>
                            
                        </div>
                        <div className="flexbox-item flexbox-item3">
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
                        
                        <div className="flexbox-item flexbox-item4">
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
                        
                        <div className="flexbox-item flexbox-item5">
                            <div className="site-image">
                                <img src="media/creatrclasses.com-square.png" alt="creatr-classes-landing-page" width="100%" />
                            </div>
                            <div className="img-caption">
                                <p>
                                <strong>Description: </strong>Wordpress website for freelance tutoring and test prep classes. Students could view weekly schedule, find course information, read helpful articles, and book appointments using Squarespace scheduling app.
                                </p>
                                <p>
                                    <strong>Features:</strong> Blog with original content, mobile responsive design, beautiful modern look with scrolling animations.
                                </p>
                                <p>
                                    <strong>View: </strong><a href="creatrclasses.com-homepage-html/index.html" target="_blank">Static HTML</a>
                                </p>
                            </div>
                        </div>
                        <div className="flexbox-item flexbox-item6">
                            <div className="site-image">
                                <img src="media/silver-linings-preview.png" alt="silver-linings-site" width="100%" />
                            </div>
                            <div className="img-caption">
                                <p>
                                <strong>Description: </strong>Built with Google Sites. My input on this projects was primarily related to back-end work and configuring the domain for public access. This client is a retired public school teacher and I helped make this website functional. The site owner created all content. 
                                </p>
                                <p>
                                    <strong>Features:</strong> Automatic publishing when the site is updated by the owners. Easy to access editing tools and beautiful templates.
                                </p>
                                <p>
                                    <strong>View: </strong><a href="https://sites.google.com/view/silverliningacademy/home" target="_blank">Live</a>
                                </p>
                            </div>
                        </div>
                        <div className="flexbox-item flexbox-item7">
                            <div className="site-image">
                                <img src="media/luxury-travel-preview.png" alt="luxury-travel-site" width="100%" />
                            </div>
                            <div className="img-caption">
                                <p>
                                <strong>Description: </strong> Luxury Travel is a brand created by a local travel consultant/private agent. A basic website including contact information and photo gallery of interesting locations and trips booked for clients. Built with Wix sitebuilder and hosted with GoDaddy.
                                </p>
                                <p>
                                    <strong>Features:</strong> Custom domain configuration and CDN (content delivery network), virtually 100% uptime, and secured using HTTPS. 
                                </p>
                                <p>
                                    <strong>View: </strong><a href="https://www.luxurytravel.one/" target="_blank">Live</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            
// project page

        case 'projects':
            return(
                <div id="portfolio-element"> 
                    <div className="flexbox-container" >
                        <div className="flexbox-title">
                            <h3 align="center">Projects</h3>
                            <p>A few projects Daniel has developed using React, vanilla JavaScript, and Python.</p>
                        </div>
                    </div>
                    
                    <div className="flexbox-container" >
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Simple Weather</h3>
                                <p>A simple weather app. You can check the weather in some of my favorite cities across the globe. Build with OpenWeather API</p>
                                <WeatherModule />
                            </div>
                        </div>
                        
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Play Pong</h3>
                                <img src="media/pong-img.png" alt="pong-screenshot" width="90%" />
                                <p>A simple recreation of the classic Pong. Game design by Kyle at WebDev Simplified. Really only works on a computer, it's not very mobile friendly. <a href="pong/pong.html" target="_blank">Play Pong</a></p>
                                
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container" id="e8-animation">
                                <h3>E8 Group Animation</h3>
                                <img id="e8-animation-img" src="media/e8-preview.png" alt="e8-group" width="90%" />
                                <p>An animation of the root lattice of exceptional group "E8," stereographically projected down to two dimensions, made in Python. The symmetries of E8 have implications to particle physics and pure mathematics. <a href="media/e8-animation.MP4" target="_blank">Link (mp4)</a></p>
                                
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container" id="limacon-python">
                                <h3>Limaçon</h3>
                                <img id="limacon-img" src="media/limacon-preview.png" alt="e8-group" width="90%" />
                                <p>A limaçon created from the envelope of the reflected rays emanating from a single point. This was inspired by noticing a limaçon is generated when light beams reflect off a circular curved surface (like a coffee cup or ceramic dish).<br /><a href="media/limacon.png" target="_blank">Full Image (png)</a> or <a href="media/limacon.py" target="_blank">Python file</a></p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            );
// contact page
        case 'contact':
            return(
                <div id="portfolio-element"> 
                    <div className="flexbox-container" >
                        <div className="flexbox-title">
                            <h3 align="center">Contact</h3>
                            <p>Want to hire me for a project, or just get in touch? Send me an email or call!
                            </p>
                        </div>
                    </div>
                    <div className="flexbox-container" >
                        <div id="contact-item">
                            <h4>Daniel Whiteside</h4>
                            <p>Email: whiteside(dot)danielj@gmail.com</p>
                            <p>Phone: 512 7four3 2zero-zero1</p>
                            <p><a href="media/daniel-whiteside-resume.pdf" target="_blank">Resume</a> - Last updated: September 7, 2022</p>
                        </div>
                    </div>
                </div>
            );
        default: return(<div>No content loaded yet. Try refreshing the page.</div>);
    }
}

export default Portfolio;