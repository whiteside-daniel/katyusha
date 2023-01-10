import React, {useState} from 'react';
import './navbar.css'

function NavBar(props) {

    const [menu, setMenu] = useState(false)

    function handleToggle() {
        setMenu(!menu)
    }

    function handleClick(dest) {
        setMenu(false)
        props.setPage(dest)
    }

    return(
        <div className="nav-container">
            <div className="nav-toggle-container"></div>
            <div className="nav-toggle-container">
                <div className="nav-toggler" onClick={handleToggle} >
                    ―<br />―
                </div>
                <div className="nav-links" style={{display: (menu ? 'block' : 'none')}}>
                    <div className="nav-item" onClick={() => {handleClick('home')}}>Home</div>
                    <div className="nav-item" onClick={() => {handleClick('websites')}}>Websites</div>
                    <div className="nav-item" onClick={() => {handleClick('projects')}}>Projects</div>
                    <div className="nav-item" onClick={() => {handleClick('contact')}}>Contact</div>
                    <div className="nav-item" onClick={() => {handleClick('blog')}}>Blog</div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;