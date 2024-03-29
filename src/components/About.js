import React from "react"
import styled from "styled-components"

import Divider from "../elements/Divider"
import SVG from "./Svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"
import Flip from "../components/Flip"

const About = ({ offset, factor = 1 }) => {
  return (
    <div>
      <Divider
        //bg="linear-gradient(to bottom, #1f4037, #99f2c8)"
        bg="linear-gradient(to top, #c31432, #240b36)"
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
          left="90%"
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
          <Wrapper>
            <div className="text">
              <h2>O NAMA</h2>
              <p>
                Mi smo tim iza kojeg stoji višegodišnji rad sa velikim brojem
                uspešno pripremljenih dekorativnih predmeta, poklona i drugih
                unikatnih i ručno izrađenih detalja. Sa nama možete ostvariti
                sve svoje želje. Vaši predmeti mogu biti personalizovani,
                elegantni, upečatljivi, raskošni, otmeni.... Prepustite se mašti
                i kontaktirajte nas da zajedno kreiramo dekoracije za Vas i Vaše
                namilije.
              </p>
            </div>

            <Flip></Flip>
          </Wrapper>
        </Inner>
      </Content>
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  .text {
    //da se onama text pomjeri malo gore
    //pa je -8rem
    margin-top: -8rem;
    margin-bottom: 3rem;
    h2 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.2rem;
      line-height: 2;
      text-shadow: var(--text-shadow);
    }
  }
  @media (min-width: 800px) {
    .text {
      margin-top: 0;
    }
  }

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;

    .text {
      p {
        font-size: 1.3rem;
        line-height: 1.5;
      }
    }
  }
`

export default About
