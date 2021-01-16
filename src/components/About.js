import React from "react"

import Divider from "../elements/divider"
import SVG from "./Svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"

const About = ({ offset, factor = 1 }) => {
  return (
    <div>
      <Divider
        bg="linear-gradient(to right, #1f4037, #99f2c8)"
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={factor}
      ></Divider>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="box"
            hiddenMobile="true"
            width="1.5rem"
            color="--colors-icon_blue"
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            hiddenMobile="true"
            width="2rem"
            color="--colors-icon_darkest"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width="2rem"
            stroke="true"
            color="--colors-icon_darkest"
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            hiddenMobile="true"
            width="6rem"
            color="--colors-icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile="true"
            width="4rem"
            color="--colors-icon_purple"
            left="5%"
            top="80%"
          />
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
            hiddenMobile="true"
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
          hiddenMobile="true"
          width="1.5rem"
          color="--colors-icon_brightest"
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width="3rem"
          color="--colors-icon_darkest"
          left="70%"
          top="60%"
        />
        <SVG
          icon="box"
          width="1.5rem"
          color="--colors-icon_orange"
          left="10%"
          top="10%"
        />
        <SVG
          icon="box"
          width="3rem"
          color="--colors-icon_red"
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
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h2>O NAMA</h2>
          <p>
            loremDuis laboris commodo nisi consectetur sunt aliqua. Mollit
            cillum aliquip Lorem in cupidatat id sint ad sit. Cillum ipsum
            consequat esse Lorem irure labore. Cupidatat nulla eu eu ipsum Lorem
            labore ex ipsum minim quis Lorem. Aute ea tempor do ut. Culpa tempor
            nulla id magna labore reprehenderit reprehenderit pariatur
            reprehenderit pariatur sit ut.
          </p>
        </Inner>
      </Content>
    </div>
  )
}

export default About
