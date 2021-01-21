import React, { useRef, useState, useContext } from "react"
import styled from "@emotion/styled"
import { GoThreeBars } from "react-icons/go"
import {
  useSpring,
  useChain,
  useTransition,
  animated,
  config,
} from "react-spring"

import { GatsbyContext } from "../context/context"
import links from "../constants/links"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const springRef = useRef()
  const transRef = useRef()

  const { parall } = useContext(GatsbyContext)

  const { size } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "0%" },
    to: { size: open ? "30%" : "0%" },
  })

  const transition = useTransition(open ? links : [], item => item.text, {
    ref: transRef,
    unique: true,
    trail: 400 / links.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  })

  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ])

  return (
    <>
      <SideBar style={{ height: size }} onClick={() => setOpen(open => !open)}>
        {transition.map(({ item, key, props }, i) => (
          <animated.li key={key} style={{ ...props }}>
            <a
              href={item.path}
              onClick={e => {
                e.preventDefault()
                parall.scrollTo(i + 2)
              }}
            >
              {item.text}
            </a>
          </animated.li>
        ))}
      </SideBar>
      <Wrapper>
        <div className="nav-center">
          <div className="nav-header">
            <a
              href="/"
              onClick={e => {
                e.preventDefault()
                parall.scrollTo(0)
              }}
            >
              <img src={logo} alt="design"></img>
            </a>
            <button
              className="toggle-btn"
              onClick={() => setOpen(open => !open)}
            >
              <GoThreeBars></GoThreeBars>
            </button>
          </div>
          <ul className="nav-links">
            {links.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    onClick={e => {
                      e.preventDefault()
                      parall.scrollTo(index + 2)
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </Wrapper>
    </>
  )
}

const SideBar = styled(animated.ul)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 9;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  background-color: var(--colors-background);
  border-bottom: 1px solid white;
  li {
    padding: 1.4rem 0;
  }
  a {
    text-align: center;
    color: var(--colors-text);
    background: transparent;
    border: transparent;
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    width: 100%;
    height: 100%;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 800px) {
    display: none;
  }
`

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: transparent;
  z-index: 10;
  height: 5.2rem;
  display: flex;
  align-items: center;

  .nav-center {
    width: 85vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }

    .toggle-btn {
      width: 3.2rem;
      height: 3.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border-radius: 10rem;
      border: transparent;
      outline: none;
      color: var(--clr-white);
      background: linear-gradient(to right, #fe8c00, #f83600);
    }
  }
  .nav-links {
    list-style-type: none;
    display: none;
  }

  @media (min-width: 800px) {
    background: linear-gradient(
      to bottom,
      rgba(20, 24, 33, 0.6),
      rgb(20, 24, 33, 0.2)
    );
    .nav-header {
      .toggle-btn {
        display: none;
      }
      a {
        margin-right: 4rem;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;

      li {
        padding: 1rem 0;
        position: relative;
        cursor: pointer;
      }
      a {
        position: relative;
        color: var(--clr-white);
        background: transparent;
        border: transparent;
        font-size: 1rem;
        letter-spacing: 2px;
        font-weight: 500;
        padding: 10px 20px;
        width: 100%;
        text-transform: capitalize;
        position: relative;
      }
      a::before {
        content: "";
        display: block;
        height: 2px;
        color: var(--clr-white);
        background: var(--clr-white);
        position: absolute;
        left: 0;
        right: 0;
        top: 3em;
        transform: scale(0, 1);
        transition: transform ease-in-out 250ms;
      }
      a:hover::before {
        transform: scale(1, 1);
      }
    }
  }
`

export default Navbar
