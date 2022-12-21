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
          <Portfolio page={page} setPage={setPage} />
        </div>
      </div>
      
      <div className="site-credit" id="site-credit">
        <p>© Daniel Whiteside, 2022</p>
        <p>Website built with ReactJS, HTML5, and CSS</p>
        <p>Site Hosting: AWS Amplify - CI/CD tool</p>
        <p>
          Additional technologies used: <br />
          GitHub, AWS Cloud9, NPM
        </p>
        <p>
          Repo for this site's source code is available <a href="https://github.com/whiteside-daniel/katyusha.git">here</a>.
        </p>
      </div>
      
    </div>
  );
}

export default App;
