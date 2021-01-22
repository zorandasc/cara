/** @jsx jsx */
import { jsx, css } from "@emotion/react"
//import React from 'react';
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

const Content = ({ speed, offset, factor = 1, children, className = "" }) => {
  return (
    <ParallaxLayer
      css={css`
        padding: 2rem;
        //border: 1px solid white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 50;
        @media (min-width: 800px) {
          padding: 4rem;
        }
      `}
      className={className}
      speed={speed}
      offset={offset}
      factor={factor}
    >
      {children}
    </ParallaxLayer>
  )
}

export default Content
