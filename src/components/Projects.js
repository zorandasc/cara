import React from "react"

import Divider from "../elements/divider"
import SVG from "./Svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"
import Deck from "../components/Deck"
import Slider from "../components/Slider"

const Projects = ({ offset, factor = 2 }) => {
  return (
    <div>
      <Divider
        offset={1.1}
        factor={factor}
        speed={-0.2}
        bg="linear-gradient(to right, #c31432, #240b36)"
        //bg="linear-gradient(to bottom, #1f4037, #99f2c8)"
        clipPath="polygon(0 15%, 100% 25%, 100% 85%, 0 75%)"
      ></Divider>
      <Content speed={0.4} offset={offset +0.2} factor={factor}>
        <Inner>
          <h2>PROJEKTI</h2>
          <Deck></Deck>
          <Slider></Slider>
        </Inner>
        
      </Content>
      <Divider speed={0.1} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="box"
            width="1.5rem"
            color="--colors-icon_brightest"
            left="85%"
            top="75%"
          />
          <SVG
            icon="upDown"
            width="2rem"
            color="--colors-icon_teal"
            left="70%"
            top="20%"
          />
          <SVG
            icon="triangle"
            width="2rem"
            stroke="true"
            color="--colors-icon_orange"
            left="25%"
            top="5%"
          />
          <SVG
            icon="circle"
            hiddenMobile="true"
            width="6rem"
            color="--colors-icon_blue"
            left="17%"
            top="60%"
          />
        </UpDown>
        <UpDownWide>
          <SVG
            icon="arrowUp"
            hiddenMobile="true"
            width="4rem"
            color="--colors-icon_green"
            left="20%"
            top="90%"
          />
          <SVG
            icon="triangle"
            width="3rem"
            stroke="true"
            color="--colors-icon_brightest"
            left="90%"
            top="30%"
          />
          <SVG
            icon="circle"
            width="4rem"
            color="--colors-icon_yellow"
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            hiddenMobile="true"
            width="4rem"
            stroke="true"
            color="--colors-icon_teal"
            left="18%"
            top="75%"
          />
          <SVG
            icon="circle"
            width="1.5rem"
            color="--colors-icon_brightest"
            left="75%"
            top="10%"
          />
          <SVG
            icon="upDown"
            hiddenMobile="true"
            width="2rem"
            color="--colors-icon_green"
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
          color="--colors-icon_pink"
          left="80%"
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
          color="--colors-icon_yellow"
          left="29%"
          top="26%"
        />
        <SVG
          icon="hexa"
          width="4rem"
          stroke="true"
          color="--colors-icon_red"
          left="75%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width="2rem"
          stroke="true"
          color="--colors-icon_yellow"
          left="80%"
          top="70%"
        />
      </Divider>
    </div>
  )
}

export default Projects
