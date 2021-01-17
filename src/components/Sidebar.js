import React, { useContext } from "react"
import { animated } from "react-spring"
import styled from "@emotion/styled"
import { MdClose } from "react-icons/md"

import { GatsbyContext } from "../context/context"
import links from "../constants/links"

const Sidebar = ({ style }) => {
  const { hideSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper style={style}>
      <div className="container">
        <button onClick={hideSidebar}>
          <MdClose className="icon" />
        </button>
        <div className="links">
          {links.map((item, index) => {
            return (
              <a key={index} to={item.path}>
                {item.text}
              </a>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled(animated.aside)`
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  @media (min-width: 800px) {
    display: none;
  }
  .container {
    background: white;
    width: 80vw;
    border-radius: 0.25rem;
    position: relative;
    padding: 4rem 2rem 2rem 2rem;
    button {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background: transparent;
      border: transparent;
      font-size: 2rem;
      cursor: pointer;
      color: gray;
    }
    .links {
      display: grid;
      gap: 1rem 2rem;
      @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }
      a {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.75rem;
        grid-gap: 0.75rem;
        align-items: center;
        color: #0a2540;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.2rem;
        .icon {
          color: #88add2;
          font-size: 2rem;
        }
        &:hover {
          color: #88add2;
          .icon {
            color: #0a2540;
          }
        }
      }
    }
  }
`

export default Sidebar
