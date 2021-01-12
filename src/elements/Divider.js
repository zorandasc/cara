/** @jsx jsx */
//import React from 'react';
import { jsx } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Divider = ({ speed, offset, factor, children = null, bg, clipPath, fill }) => {
    return (
        <ParallaxLayer
            sx={{
                position: "absolute",
                widows: "full",
                height: "full",
                background: bg,
                backgroundColor: bg,
                "#contact-wave": {
                    color: fill,
                    fill: `currentColor`,
                },
                clipPath

            }}
            speed={speed}
            offset={offset}
            factor={factor}>
            {children}
        </ParallaxLayer>
    );
};

export default Divider;