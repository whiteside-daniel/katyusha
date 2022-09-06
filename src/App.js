import React, {useState} from 'react';
import ContentModule from './components/content-module.js';
import Portfolio from './components/portfolio.js';
import './App.css';
import {TerminalWindow} from './components/terminal-window.js';

function App() {
  
  const [page, setPage] = useState('home');
  
  return (
    <div className="App">
    
      <TerminalWindow />
      
      <ContentModule page={page} setPage={setPage} />
      
      <div className="outer-portfolio-container">
        <div id="inner-portfolio-container">
          <Portfolio page={page} />
        </div>
      </div>
      
      <div className="site-credit" id="site-credit">
        <p>© Daniel Whiteside, 2022</p>
        <p>Website built with ReactJS, HTML5, and CSS</p>
        <p>Site Hosting: DigitalOcean - Ubuntu 22.04 x64 and Apache2</p>
        <p>
          Additional technologies used: <br />
          GitHub, AWS Cloud9, Node Package Manager
        </p>
      </div>
      
    </div>
  );
}

export default App;
