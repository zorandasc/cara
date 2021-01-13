/** @jsx jsx */
//import React from "react"
import { jsx } from "theme-ui"


const Inner = ({ children, className = "" }) => {
    return (
        <div
            sx={{
                border: "1px solid red",
                textAlign: `left`,
                width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
                
            }}
            className={className}
        >
            {children}
        </div>
    );
};

export default Inner;