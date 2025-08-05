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
                                Daniel Whiteside is a software engineer, project manager, and solutions architect with a unique blend of technical expertise and human-centered leadership skills. Currently serving as Developer/Project Manager at BRKTHRU, Daniel integrates cutting-edge AI technology and facilitates custom software implementations across Microsoft, Zoho, and other enterprise ecosystems.
                            </p>
                            <p>
                            Daniel brings a distinctive combination of technical depth and interpersonal intelligence to his work. His background spans full-stack development, data analytics, project management, and team leadership, supported by certifications including Certified Scrum Master (CSM), CompTIA Data+, and Associate Project Manager (CAPM).
                            <br /></p>
                        </div>
                    </div>
                    
                    <div className="home-slide" id="language-slide">
                        <div className='slide-img'>
                            <img src='media/slide-lang.png' width="100%" />
                        </div>
                        <div className="slide-caption">
                            <p>
                                Throughout his career, Daniel has architected and delivered solutions for organizations ranging from startups to enterprise clients, with particular expertise in:
                            </p><br />
                            <ul>
                                <li>CRM and business application integration</li>
                                <li>Data analytics and reporting systems</li>
                                <li>AI/ML implementation and strategy</li>
                                <li>Agile project management and team facilitation</li>
                                <li>Full-stack web development (JavaScript, Python, React)</li>
                            </ul>
                            <p>
                                His technical toolkit includes JavaScript/Node.js, Python, SQL, AWS, REST APIs, and extensive experience with the Zoho ecosystem. During his tenure as Project Lead/Solutions Engineer at Zoho, Daniel became a recognized subject matter expert, speaking at tech events and delivering enterprise solutions for high-value customers.
                            </p>
                        </div>
                    </div>
                    
                    
                    <div className="home-slide" id="soft-skills-slide">
                        <div className='slide-img'>
                            <img src='media/slide-soft-skills.png' width="100%" />
                        </div>
                        <div className="slide-caption">
                            <p>
                                Daniel's approach to technology is informed by over 500 hours of training in psychology, communication, and leadership. This unique foundation enables him to bridge technical and human elements effectively, fostering collaboration and delivering solutions that truly serve end users.
                            </p>
                            
                            <div id="quote">
                                <p>
                                A Note from Daniel:
                                </p>
                                <p>
                                    Early in my career, I recognized that technical excellence alone wasn't sufficient for creating meaningful impact. I invested significant time studying human psychology, communication, and systems thinking – disciplines that now inform every aspect of my work.
                                </p>
                                <p>
                                    This foundation has proven invaluable in leadership roles, whether facilitating cross-functional teams, translating complex technical concepts for stakeholders, or designing user-centered solutions. I've learned that the most powerful technology emerges when technical capability is guided by deep understanding of human needs and organizational dynamics.
                                </p>
                                <p>
                                    Today, I bring both technical rigor and human insight to every project, helping teams and organizations leverage technology in ways that are both innovative and sustainable."
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
                                <img src="media/jsa-austin.png" alt="jsa-nonprofit-website" width="100%" />
                            </div>
                            <div className="img-caption">
                                <p>
                                <strong>Description: </strong>Wordpress website for Jung Society of Austin 501c(3). A website dedicated to posting event updates, helpful resources, and managing member donations.
                                </p>
                                <p>
                                    <strong>Features:</strong> Mobile responsive design, member login portal and management, beautiful modern look.
                                </p>
                                <p>
                                    <strong>View: </strong><a href="https://jungsociety.org" target="_blank">Live</a>
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
                                <img id="limacon-img" src="media/limacon-preview.png" alt="limacon" width="90%" />
                                <p>A limaçon created from the envelope of the reflected rays emanating from a single point. This was inspired by noticing a limaçon is generated when light beams reflect off a circular curved surface (like a coffee cup or ceramic dish).<br /><a href="media/limacon.png" target="_blank">Full Image (png)</a> or <a href="media/limacon.py" target="_blank">Python file</a></p>
                                
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container" id="conscious-shopper">
                                <h3>Conscious Shopper</h3>
                                <img id="shopper-img" src="media/shopper.jpg" type="" alt="conscious shopper" width="90%" />
                                <p>Conscious Shopper - an open source project bringing together cutting-edge analytics and government transparency. Coming soon! </p>
                                
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container" id="youtube-channel">
                                <h3>My YouTube Channel</h3>
                                <img id="youtube-img" src="media/youtube.png" type="" alt="conscious shopper" width="90%" />
                                <p>My YouTube channel has videos I've uploaded over the years, from instructional math videos to philosophical rants and guided meditations. <a href="https://www.youtube.com/channel/UCpDOcOb2HGJhKD-iJj_ShNw" target="_blank" >Link</a></p>
                                
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
                            <p>Phone: 512 7four3 2zero-zero1 (humans, you can figure it out)</p>
                            <p><a href="media/daniel-whiteside-resume.pdf" target="_blank">Resume</a> - Last updated: August 2025</p>
                        </div>
                    </div>
                </div>
            );
            case 'blog':
                return(
                    <div id="portfolio-element"> 
                        <div className="flexbox-container" >
                            <div className="flexbox-title">
                                <h3 align="center">Blog</h3>
                            </div>
                        </div>
                        <div className="flexbox-container" >
                            
                        </div>
                    </div>
                );
        default: return(<div>No content loaded yet. Try refreshing the page.</div>);
    }
}

export default Portfolio;