import React from 'react';
import Iframe from 'react-iframe';

const url = "https://ourworldindata.org/grapher/daily-cases-covid-19?tab=map&country=IND";

const Dailydatachart =()=> (
        <Iframe url= {`${url}`}
        width="100%"
        height="600px"
        id="myId"
        className="dailydatachart"
        display="initial"
        position="relative"/>
)

export default Dailydatachart;