import React from 'react';
import './navbar.styles.scss';

const Navbarheader = () =>(
    <div className="section-navbar">
        <div className="navbar">
            <div className="navbar-logo">
                <img alt="LOGO" src=""></img>
            </div>

            <div className="navvbar-link">
                    <a href="#" className="navbar-link__1">Hospitals</a>
                    <a href="#" className="navbar-link__2">Buy/sell</a>
                    <a href="#" className="navbar-link__3">Covid Help</a>
                    <a href="#" className="navbar-link__4">Create Account for free</a>
            </div>
        </div>
    </div>
)


export default Navbarheader;