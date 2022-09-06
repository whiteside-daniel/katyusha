import React from 'react';
import Typewriter from 'typewriter-effect';

export const TerminalWindow = () => {
    return(
        <div id="terminal-window">
                <code id="typewriter">
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter.typeString('$load-file: daniel-portfolio')
                          .pauseFor(250)
                          .typeString('<br>portfolio loading')
                          .pauseFor(250)
                          .typeString('<br>running scripts')
                          .pauseFor(20)
                          .typeString('<br>finding data')
                          .pauseFor(20)
                          .typeString('<br>-▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒')
                          .pauseFor(100)
                          .typeString(' 100%')
                          .pauseFor(100)
                          .typeString('<br>site built with ReactJS, HTML5, CSS')
                          .pauseFor(20)
                          .typeString('<br>host: digitalOcean - Ubuntu 22.04 x64')
                          .pauseFor(1500)
                          .callFunction((elements) => {
                              let portfolio = document.getElementById('homepage-container');
                              let contentModule = document.getElementById('content-module');
                              let terminal = document.getElementById('terminal-window');
                              let credit = document.getElementById('site-credit');
                              let root = document.documentElement;
                              portfolio.style.display = 'block';
                              contentModule.style.display = 'block';
                              credit.style.display = 'block';
                              terminal.style.display = 'none';
                          })
                          .start();
                      }}
                      options={{
                        loop: false,
                        delay: 40,
                        cursor: '█'
                      }}
                    />
                </code>
        </div>
    );
}