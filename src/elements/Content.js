import React from 'react';

import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Content = ({ speed, offset, factor = 1, children, className = "" }) => {

    return (
        <ParallaxLayer 
            style={{
                padding:"2rem",//4rem iznad oko 800px
                border: "1px solid white",
                display: "flex",
                flexDirection: `column`,
                alignItems: "center",
                justifyContent: 'center',
                zIndex: 50,
            }}
        /*
        sx={{
            padding: [3, 4, 4, 5],
            border: "1px solid white",
            display: "flex",
            flexDirection: `column`,
            alignItems: "center",
            justifyContent: 'center',
            zIndex: 50,

        }}*/
            className={className}
            speed={speed}
            offset={offset}
            factor={factor}
        >
            {children}
        </ParallaxLayer>
    );
};

export default Content;