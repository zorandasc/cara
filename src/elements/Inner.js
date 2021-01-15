import React from "react"

const Inner = ({ children, className = "" }) => {
    return (
        <div
        style={{
            border: "1px solid red",
            textAlign: `left`,
            width:"100%"
        }}
          /*  sx={{
                border: "1px solid red",
                textAlign: `left`,
                width: [`full`, `full`, `full`, `full`, `full`, `2/3`],
                
            }}*/
            className={className}
        >
            {children}
        </div>
    );
};

export default Inner;