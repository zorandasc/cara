import React from 'react';
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Divider = ({ speed, offset, factor, children = null, }) => {
    return (
        <ParallaxLayer
            speed={speed}
            offset={offset}
            factor={factor}>
            {children}
        </ParallaxLayer>
    );
};

export default Divider;