import React from 'react';
import NavBar from './navbar.js';

const ContentModule = (props) => {

    return(
            <div className="header-container video-wrapper" id="content-module" >
                <video id="video-background" key='video' autoPlay loop muted playsInline width="100%" >
                  <source src="media/circuit.mp4" />
                </video>
                <NavBar page={props.page} setPage={props.setPage} />
                <div className="headshot-container">
                    <div className="headshot" style={{ backgroundImage: "url(media/headshot.jpg)" }}>
                    </div>
                    <div className="headshot-caption">
                        <span>&#60;Daniel Whiteside&#62;<br />
                        &#60;Web Developer&#62;</span>
                    </div>
                </div>
            </div>
    );
}

export default ContentModule;