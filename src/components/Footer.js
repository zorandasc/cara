/** @jsx jsx */
//import React from 'react';
import { Box, jsx } from "theme-ui"

const Footer = () => {
    return (
        <Box as="footer" variant="footer">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
        </Box>
    );
};

export default Footer;