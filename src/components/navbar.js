import React, {useState} from 'react';
import './navbar.css';

const Navbar = (props) => {
    let dropdownLink;
    let homeLink;
    let webLink;
    let contactLink;
    let projectsLink;
    
    function initialize() {
        dropdownLink = document.getElementById('dropdown-link');
        homeLink = document.getElementById('home-link');
        webLink = document.getElementById('web-link');
        projectsLink = document.getElementById('projects-link');
        contactLink = document.getElementById('contact-link');
    }
    

    
    const [wide, setWide] = useState('yes');
    
    
    const handleResize = () => {
        if(window.innerWidth > 428) {
        dropdownLink.style.display = 'none';
        homeLink.style.display = 'block';
        webLink.style.display = 'block';
        projectsLink.style.display = 'block';
        contactLink.style.display = 'block';
        setWide('yes');
        } 
        else {
        dropdownLink.style.display = 'block';
        homeLink.style.display = 'none';
        webLink.style.display = 'none';
        projectsLink.style.display = 'none';
        contactLink.style.display = 'none';
        setWide('no')
        }
        
    }
    
    const toggleDropDown = () => {
        initialize();
        if(window.innerWidth > 428) {
            console.log('button click: wide screen')
            return;
        }
        else {
            console.log('button click: narrow screen')
            if(homeLink.style.display === 'block') {
                homeLink.style.display = 'none';
                webLink.style.display = 'none';
                projectsLink.style.display = 'none';
                contactLink.style.display = 'none';
            } else {
                homeLink.style.display = 'block';
                webLink.style.display = 'block';
                projectsLink.style.display = 'block';
                contactLink.style.display = 'block';
            }
        }
    }
    
    window.addEventListener('resize', () => {
        initialize();
        handleResize();
    })
    
    window.addEventListener('DOMContentLoaded', () => {
        initialize();
        handleResize();
    })
    
    return(
        <div className="Navbar flex-navbar" state={wide}>
            <div className="flex-nav-item nav-link">
                <span id="dropdown-link" onClick={() => {
                    toggleDropDown();
                }}>Menu</span>
            </div>
            <div className="flex-nav-item nav-link">
                <span id="home-link" onClick={() => {
                    props.setPage('home');
                    toggleDropDown();
                }}>Home</span>
            </div>
            <div className="flex-nav-item nav-link">
                <span id="web-link" onClick={() => {
                    props.setPage('websites');
                    toggleDropDown();
                }}>Web</span>
            </div>
            <div className="flex-nav-item nav-link">
                <span id="projects-link" onClick={() => {
                    props.setPage('projects');
                    toggleDropDown();
                }}>Projects</span>
            </div>
            <div className="flex-nav-item nav-link">
                <span id="contact-link" onClick={() => {
                    props.setPage('contact');
                    toggleDropDown();
                }}>Contact</span>
            </div>
        </div>
    );
    
}

export default Navbar;