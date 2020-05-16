import React from 'react';
import Rectbtn from '../rectangular-button/rectangular-button.component';
import './footer.styles.scss';

const Footer = ()=>(
    <div className="section-footer">
         <div className="jj">
             Come and expolre us
            <Rectbtn></Rectbtn>
            <div>
                <p>visit our github given below for project directory but don't claim it as own!</p>
            </div>
            <div>
                <p>this website is developed under a react project by aman and krishnam</p>
                <h4>&copy; copyright 2020</h4>
            </div>
         </div>
    </div>
)

export default Footer;