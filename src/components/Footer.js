/** @jsx jsx */
//import React from 'react';
import { Box, jsx } from "theme-ui"
import styled from "styled-components"

const Footer = () => {
    return (
        <Box as="footer" variant="footer">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
        </Box>
    );
};



const Box1=styled.footer`
    text-align: center;
    display:block;
    position: absolute;
    bottom: 0;
    padding:2rem 1rem;
    //color: textMuted,
    //px: [2, 3],
    //py: [3, 4],
`

export default Footer;