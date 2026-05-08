import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ContentModule from './components/content-module.js';
import Portfolio from './components/portfolio.js';
import './App.css';
import {TerminalWindow} from './components/terminal-window.js';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  const pathToPage = { '/projects': 'projects', '/business-ideas': 'business-ideas' };
  const page = pathToPage[location.pathname] ?? 'home';
  const setPage = (dest) => navigate(dest === 'home' ? '/' : `/${dest}`);

  // Skip the intro if landing on a non-home route directly
  const [introComplete, setIntroComplete] = useState(location.pathname !== '/');

  return (
    <div className="App">

      {!introComplete && <TerminalWindow onComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <>
          <ContentModule page={page} setPage={setPage} />

          <div className="outer-portfolio-container">
            <div id="inner-portfolio-container">
              <Portfolio page={page} setPage={setPage} />
            </div>
          </div>

          <div className="site-credit" id="site-credit">
            <p>© Daniel Whiteside, 2026</p>
            <p>Built with React · Hosted on DigitalOcean · <a href="https://github.com/whiteside-daniel/katyusha.git" target="_blank" rel="noreferrer">Source</a></p>
          </div>
        </>
      )}

    </div>
  );
}

export default App;
