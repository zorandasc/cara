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
            hiddenMobile
            width={6}
            color="icon_blue"
            left="50%"
            top="75%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={8}
            color="icon_darkest"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width={8}
            stroke
            color="icon_darkest"
            left="25%"
            top="5%"
          />
          <SVG
            icon="upDown"
            hiddenMobile
            width={24}
            color="icon_orange"
            left="80%"
            top="80%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile
            width={16}
            color="icon_purple"
            left="5%"
            top="80%"
          />
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
            hiddenMobile
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
          hiddenMobile
          width={6}
          color="icon_brightest"
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          width={12}
          color="icon_darkest"
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
        <SVG icon="box" width={12} color="icon_red" left="20%" top="30%" />
        <SVG
          icon="hexa"
          width={8}
          stroke
          color="icon_darkest"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content speed={0.4} offset={offset} factor={factor}>
        <Inner>
          <h1>O NAMA</h1>
          <p>loremDuis laboris commodo nisi consectetur sunt aliqua. Mollit cillum aliquip Lorem in cupidatat id sint ad sit. 
            Cillum ipsum consequat esse Lorem irure labore. Cupidatat nulla eu eu ipsum Lorem labore ex ipsum minim quis Lorem. Aute ea tempor do ut. Culpa tempor nulla id magna labore reprehenderit reprehenderit pariatur reprehenderit pariatur sit ut.</p>
        </Inner>
      </Content>
    </div>
  )
}

export default About
