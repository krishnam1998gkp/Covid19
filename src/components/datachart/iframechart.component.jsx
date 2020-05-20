import React from 'react';
import Iframe from 'react-iframe';

const Iframechart =({url})=> (
        <Iframe url= {`${url}`}
        //width="700px"
        height="600px"
        id="myId"
        className="dailydatachart"
        //display="block"
        position="relative"/>
)

export default Iframechart;