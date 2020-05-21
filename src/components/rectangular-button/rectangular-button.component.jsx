import React from 'react';
import './rectangular-button.styles.scss';

const Rectbtn = ({info})=>(
     
    <div className="rect-btn">
        <button className="btn btn-white btn-footer">{info} &rArr;</button>
    </div>
)

export default Rectbtn;