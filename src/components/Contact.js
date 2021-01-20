/** @jsx jsx */
import { jsx, css } from "@emotion/react"
//import React from "react"
import styled from "@emotion/styled"
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa"

import Footer from "./Footer"
import Divider from "../elements/Divider"
import SVG from "./Svg"
import { UpDown, UpDownWide /*waveAnimation*/ } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"

const Contact = ({ offset, factor = 1 }) => {
  return (
    <div>
      <Divider
        fill="--colors-divider"
        speed={0.2}
        offset={offset}
        factor={factor}
      >
        <div
          css={css`
            position: absolute;
            bottom: 0;
            width: 100%;
            //invertuj oko x ose
            transform: matrix(1, 0, 0, -1, 0, 0);
          `}
        >
          <div
            css={css`
              position: relative;
              height: 100%;
              svg {
                width: 100%;
                height: 80vh;
              }
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="contact-wave"
              viewBox="0 0 800 338.05"
              preserveAspectRatio="none"
            >
              <path>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="20s"
                />
              </path>
            </svg>
          </div>
        </div>
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h2>KONTAKT</h2>
          <p
            css={css`
              font-size: 1.5rem;
              font-weight: 500;
              font-family: "Caveat", cursive;
              color: var(--colors-icon_orange);
              @media (min-width: 800px) {
                font-size: 2rem;
              }
            `}
          >
            Ostanite u kontaktu, pišite nam.
          </p>
          <Container>
            <a href="/#">
              <i>
                <FaFacebook
                  css={css`
                    color: #3b5998;
                  `}
                ></FaFacebook>
              </i>
            </a>
            <a href="/#">
              <i>
                <FaTwitter
                  css={css`
                    color: #00acee;
                  `}
                ></FaTwitter>
              </i>
            </a>
            <a href="/#">
              <i>
                <FaInstagram
                  css={css`
                    color: #f14843;
                  `}
                ></FaInstagram>
              </i>
            </a>
            <a href="/#">
              <i>
                <FaYoutube
                  css={css`
                    color: #f00;
                  `}
                ></FaYoutube>
              </i>
            </a>
            <a href="/#">
              <i>
                <FaWhatsapp
                  css={css`
                    color: #4fce5d;
                  `}
                ></FaWhatsapp>
              </i>
            </a>
          </Container>
        </Inner>
        <Footer></Footer>
      </Content>

      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="upDown"
            hiddenMobile="true"
            width="2rem"
            color="--colors-icon_yellow"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width="2rem"
            stroke="true"
            color="--colors-icon_brightest"
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width="3rem"
            stroke="true"
            color="--colors-icon_brightest"
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width="1.5rem"
            color="--colors-icon_brightest"
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            hiddenMobile="true"
            width="2rem"
            color="--colors-icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          width="1.5rem"
          color="--colors-icon_brightest"
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width="3rem"
          color="--colors-icon_pink"
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width="6rem"
          color="--colors-icon_green"
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width="2rem"
          stroke="true"
          color="--colors-icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5rem;

  a {
    cursor: pointer;
    background: #ddd;
    width: 65px;
    height: 65px;
    margin: 5px;
    margin-bottom: 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
    transition: transform 0.5s;

    i {
      font-size: 35px;
      color: #777;
      transition: transform 0.5s;
      line-height: 0;
    }
    &:hover {
      box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.6),
        inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
        -0.5px -0.5px 0px rgba(255, 255, 255, 1),
        0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
        0px 12px 10px -10px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.01);
      transform: translateY(2px);
      i {
        transform: scale(0.9);
      }
      /*
      :nth-of-type(1) i svg {
        color: #3b5998;
      }
      :nth-of-type(2) i svg {
        color: #00acee;
      }
      :nth-of-type(3) i svg {
        color: #f14843;
      }
      :nth-of-type(4) i svg {
        color: #f00;
      }
      :nth-of-type(5) i svg {
        color: #4fce5d;
      }
      */
    }
    /*
    @media (min-width: 800px) {
      :nth-of-type(n) i svg {
        color: #777;
      }
    }
    */
  }

  @media (min-width: 800px) {
    justify-content: center;
    a {
      margin: 2rem;
    }
  }
`

export default Contact
