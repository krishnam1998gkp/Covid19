import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

import {ReactComponent as Logo} from '../../assets/logo-nav.svg';

const Navbarheader = () =>(
    <div className="section-navbar">
        <div className="navbar">
            <div className="navbar-logo">
                <Logo></Logo>
            </div>

            <div className="navbar-links">
                    <Link href="#" className="navbar-link navbar-link__1">Hospitals</Link>
                    <Link href="#" className="navbar-link navbar-link__2">Buy/sell</Link>
                    <Link href="#" className="navbar-link navbar-link__3">Covid Help</Link>
                    <Link href="#" className="navbar-link navbar-link__4">Create Account for free</Link>
            </div>
        </div>
    </div>
)


export default Navbarheader;