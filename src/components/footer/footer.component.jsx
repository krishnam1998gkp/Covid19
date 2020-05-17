import React from 'react';
import Rectbtn from '../rectangular-button/rectangular-button.component';
import './footer.styles.scss';
import { Link } from 'react-router-dom';

const Footer = ()=>(
    <div className="section-footer">
         <div className="footer-signup">
             <p>Come and expolre us</p>
            <Rectbtn></Rectbtn>
         </div>
            <div className="footer-info">
                <div className="footer-info__left">
                    <h4>Technology Stack</h4>
                    <p>React js</p>
                    <p>Mongodb</p>
                    <p>Node js</p>
                </div>
                

                <div className="footer-info__right">
                    <h4>Github Profiles</h4>
                    <p><Link className="footer-info__right-link">aman</Link></p>
                    <p><Link className="footer-info__right-link">krishnam</Link></p>
                </div>
            </div>
            <div className="footer-copyright">
                <p>this website is developed under a react project by aman and krishnam</p>
                <p>visit our github profile given for project directory but don't claim it as own!</p>
                <h4>&copy; copyright 2020</h4>
                <h4> All rights reserved</h4>
            </div>
        
    </div>
)

export default Footer;