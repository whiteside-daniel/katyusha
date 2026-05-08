import React from 'react';
import Typewriter from 'typewriter-effect';

export const TerminalWindow = ({ onComplete }) => {
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
                          .pauseFor(1500)
                          .callFunction(onComplete)
                          .start();
                      }}
                      options={{
                        loop: false,
                        delay: 40,
                        cursor: '█'
                      }}
                    />
                </code>
                <button onClick={onComplete} style={{
                    position: 'fixed',
                    bottom: '1.5rem',
                    right: '1.5rem',
                    background: 'none',
                    border: '1px solid currentColor',
                    color: 'inherit',
                    fontFamily: 'inherit',
                    fontSize: 'small',
                    padding: '4px 12px',
                    cursor: 'pointer',
                    opacity: 0.6,
                }}>skip →</button>
        </div>
    );
}
