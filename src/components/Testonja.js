import React from "react"
import styled from "styled-components"
import { animated } from "react-spring"

import links from "../constants/links"

const Testonja = props => {
  return (
    <SideBar style={props.style}>
      <div className="links">
        {links.map((item, index) => {
          return (
            <a key={index} to={item.path}>
              {item.text}
            </a>
          )
        })}
      </div>
    </SideBar>
  )
}

const SideBar = styled(animated.nav)`
  position: absolute;
  z-index: 100;
  top: 5rem;
  width: 100%;
  background: var(--clr-primary-5);
`

export default Testonja
