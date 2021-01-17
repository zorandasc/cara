import React, { useContext } from "react"
import styled from "@emotion/styled"
import { GoThreeBars } from "react-icons/go"

import links from "../constants/links"
import logo from "../images/logo.svg"
import { GatsbyContext } from "../context/context"

const Navbar = () => {
  const { toggleSidebar, showSidebar } = useContext(GatsbyContext)

  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="design"></img>
          </a>
          {
            <button className="toggle-btn" onClick={toggleSidebar}>
              <GoThreeBars></GoThreeBars>
            </button>
          }
        </div>
        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a to={item.path}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  padding-top: 2rem;
  width: 100%;
  background: transparent;
  z-index: 1;
  height: 3.5rem;
  display: flex;
  align-items: center;

  .nav-center {
    width: 90vw;
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
    a {
      margin-right: 4rem;
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
      color: var(--clr-white);
      background: var(--clr-primary-5);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    list-style-type: none;
    display: none;
  }

  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
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
