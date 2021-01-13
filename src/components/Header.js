/** @jsx jsx */
//import React from 'react';
import { Box, Flex, jsx } from "theme-ui"

const Header = () => {
  return (
    <Box
      sx={{
        display: `block`,
        position: `absolute`,
        top: 0,
        width: `full`,
        color: `icon_red`,
        px: [2, 3],
        zIndex: 50,
        borderBottom: theme => `1px solid ${theme.colors.icon_red}`,
        justifyContent: `space-betwen`,
        alignItems: `center`,
      }}
      as="header"
      variant="header"
    >
      <h1>LOGO</h1>
      <ul>
        <l1>Projekti</l1>
        <l1>O nama</l1>
        <l1>Kontakt</l1>
      </ul>
    </Box>
  )
}

export default Header
