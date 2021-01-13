/** @jsx jsx */
//import React from "react"
//import styled from "@emotion/styled"
import { jsx } from "theme-ui"

import Footer from "./footer"
import Divider from "../elements/divider"
import SVG from "./Svg"
import { UpDown, UpDownWide /*waveAnimation*/ } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"


const Contact = ({ offset, factor = 1 }) => {
  return (
    <div>
      <Divider fill="divider" speed={0.2} offset={offset} factor={factor}>
        <div
          sx={{
            position: `absolute`,
            bottom: 0,
            width: `full`,
            //invertuj oko x ose
            transform: `matrix(1, 0, 0, -1, 0, 0)`,
          }}
        >
          <div
            sx={{
              position: `relative`,
              height: `full`,
              svg: { width: `100%`, height: `80vh` },
            }}
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
          <h1>KONTAKT</h1>
        </Inner>
        <Footer></Footer>
      </Content>

      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_yellow"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke
            color="icon_brightest"
            left="25%"
            top="5%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="triangle"
            width={12}
            stroke
            color="icon_brightest"
            left="95%"
            top="50%"
          />
          <SVG
            icon="circle"
            width={6}
            color="icon_brightest"
            left="85%"
            top="15%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <SVG icon="circle" width={12} color="icon_pink" left="70%" top="60%" />
        <SVG icon="box" width={24} color="icon_green" left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
    </div>
  )
}

export default Contact
