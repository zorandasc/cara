/** @jsx jsx */
import { jsx, css } from "@emotion/react"
//import React from 'react';
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Divider = ({ speed, offset, factor, children = null, bg, clipPath, fill }) => {
    return (
        <ParallaxLayer
            css={css`
                position:absolute;
                width:100%;
                height:100%;
                background:${bg};
                background-color:${bg};
                clip-path:${clipPath};
                #contact-wave{
                    color:var(${fill}) ;
                    fill: var(${fill});
                }    
            `}

            speed={speed}
            offset={offset}
            factor={factor}>
            {children}
        </ParallaxLayer>
    );
};



export default Divider;