import React from 'react';
import styled from "styled-components"

const Footer = () => {
    return (
        <Wrapper as="footer" variant="footer">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br />
        </Wrapper>
    );
};



const Wrapper=styled.footer`
    text-align: center;
    display:block;
    position: absolute;
    bottom: 0;
    padding:2rem 1rem;
    color: var(--colors-textMuted);
    //px: [2, 3],
    //py: [3, 4],
`

export default Footer;