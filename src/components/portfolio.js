import React, {useState} from 'react';
import './portfolio.css';
import WeatherModule from './weather.js';

const Portfolio = (props) => {

    const [showDemoModal, setShowDemoModal] = useState(false);

    switch(props.page) {
        
//home page
        case 'home':
            return(
                <div className="home-container" id="homepage-container">
                    <div className="home-slide">
                        <div className="slide-caption">
                            <p>
                                Daniel Whiteside is a software engineer, project manager, and solutions architect. He currently works as an independent consultant and is building Wharfinger, an asset management application.
                            </p>
                            <p>
                                His background spans full-stack development, data analytics, AI integration, and enterprise software — with certifications in Scrum (CSM), data (CompTIA Data+), and project management (CAPM).
                            </p>
                        </div>
                    </div>

                    <div className="home-slide">
                        <div className="slide-caption">
                            <p>Areas of focus:</p>
                            <ul>
                                <li>Zoho CRM and business application development</li>
                                <li>Inventory and asset management systems</li>
                                <li>AI/ML implementation and strategy</li>
                                <li>Agile project management and team facilitation</li>
                            </ul>
                            <p>
                                Technical toolkit: JavaScript/Node.js, Python, SQL, AWS, REST APIs, Zoho ecosystem. Former Project Lead/Solutions Engineer at Zoho — spoke at tech events, delivered enterprise solutions for high-value clients.
                            </p>
                        </div>
                    </div>

                    <div className="home-slide">
                        <div className="slide-caption">
                            <p>
                                Daniel's approach to technology is grounded in over 500 hours of training in psychology, communication, and leadership — a foundation that shapes how he leads teams, engages stakeholders, and designs solutions that actually get used.
                            </p>
                            <div id="quote">
                                <p>
                                    Early in my career I recognized that technical excellence alone wasn't enough. I invested heavily in understanding human psychology, communication, and systems thinking — and those disciplines now inform everything I build and every team I work with.
                                </p>
                                <p>
                                    The most durable technology emerges when technical capability is guided by a genuine understanding of human needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="home-contact">
                        <p>Get in touch</p>
                        <p>daniel@creatrcollective.net &nbsp;·&nbsp; 512 7four3 2zero-zero1</p>
                        <p>
                            <a href="media/daniel-whiteside-resume.pdf" target="_blank">Resume</a>
                            &nbsp;·&nbsp;
                            <a href="https://creatrcollective.substack.com" target="_blank" rel="noreferrer">Substack</a>
                        </p>
                    </div>
                </div>
            );
// project page

        case 'projects':
            return(
                <div id="portfolio-element">

                    {showDemoModal && (
                        <div id="demo-modal-overlay" onClick={() => setShowDemoModal(false)}>
                            <div id="demo-modal" onClick={e => e.stopPropagation()}>
                                <h4>Wharfinger Demo Access</h4>
                                <p>Log in with the demo account to explore the app:</p>
                                <code>
                                    <p>Email: jake@zephyr.com</p>
                                    <p>Password: password123</p>
                                </code>
                                <div id="demo-modal-buttons">
                                    <a href="https://staging.wharfinger.app" target="_blank" rel="noreferrer" onClick={() => setShowDemoModal(false)}>Go to Wharfinger →</a>
                                    <button onClick={() => setShowDemoModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flexbox-container">
                        <div className="flexbox-title">
                            <h3 align="center">Projects</h3>
                        </div>
                    </div>

                    <div className="flexbox-container">
                        <div className="flexbox-item" id="wharfinger-featured">
                            <div className="projects-container">
                                <img src="wharfinger-logo.svg" alt="Wharfinger" id="wharfinger-logo" />
                                <h3>Wharfinger</h3>
                                <p>
                                    A multi-tenant asset management platform built for field operations. Tracks serialized and bulk inventory across locations, manages work orders, and syncs bidirectionally with Zoho Inventory, Zoho FSM, and Peplink IC2.
                                </p>
                                <p>
                                    Built with Vue 3, Express.js, and PostgreSQL. Features role-based access control, offline PWA support with an IndexedDB mutation queue, AES-256-GCM credential encryption, TOTP 2FA, and background sync workers running on Docker.
                                </p>
                                <button className="demo-link-btn" onClick={() => setShowDemoModal(true)}>Try the demo →</button>
                            </div>
                        </div>
                    </div>

                    <div className="flexbox-container">
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
                                <p>A limaçon created from the envelope of the reflected rays emanating from a single point. Inspired by noticing a limaçon is generated when light reflects off a circular curved surface (like a coffee cup).<br /><a href="media/limacon.png" target="_blank">Full Image (png)</a> or <a href="media/limacon.py" target="_blank">Python file</a></p>
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Simple Weather</h3>
                                <p>A simple weather app. Check the weather in some of my favorite cities. Built with OpenWeather API.</p>
                                <WeatherModule />
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Retirement Calculator</h3>
                                <p>An interactive retirement savings calculator. Enter your current savings, contributions, and expected returns to project growth and see how long your nest egg will last. Built with Chart.js and MathJax. <a href="retirement-calculator/index.html" target="_blank">Open Calculator</a></p>
                            </div>
                        </div>
                        <div className="flexbox-item">
                            <div className="projects-container">
                                <h3>Play Pong</h3>
                                <img src="media/pong-img.png" alt="pong-screenshot" width="90%" />
                                <p>A simple recreation of classic Pong. Desktop only — not mobile friendly. <a href="pong/pong.html" target="_blank">Play Pong</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            );
        default: return(<div>No content loaded yet. Try refreshing the page.</div>);
    }
}

export default Portfolio;