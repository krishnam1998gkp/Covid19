import React from 'react';
import Iframe from 'react-iframe';

const Iframechart =({url})=> (
        <Iframe url= {`${url}`}
        width="100%"
        height="600px"
        id="myId"
        className="dailydatachart"
        display="initial"
        position="relative"/>
)

export default Iframechart;