import React from "react"
import { css } from "@emotion/react"
import Divider from "../elements/Divider"
import SVG from "./Svg"
import { UpDown, UpDownWide } from "../styles/animations"
import Content from "../elements/Content"
import Inner from "../elements/Inner"

const Hero = ({ offset, factor = 1 }) => {
  return (
    <div>
      <Divider speed={0.2} offset={offset} factor={factor}>
        <UpDown>
          <SVG
            icon="cross"
            //width={16}
            width="4rem"
            stroke="true"
            color="--colors-icon_pink"
            left="28%"
            top="15%"
          />
          <SVG
            icon="triangle"
            //width={48}//12rem
            width="12rem"
            stroke="true"
            color="--colors-icon_orange"
            left="10%"
            top="20%"
            hiddenMobile="true"
          ></SVG>
          <SVG
            icon="hexa"
            //width={48}//12rem
            width="12rem"
            stroke="true"
            color="--colors-icon_red"
            left="60%"
            top="70%"
          ></SVG>
          <SVG
            icon="box"
            //width={20}//5rem
            width="5rem"
            stroke="false"
            color="--colors-icon_green"
            left="60%"
            top="15%"
          ></SVG>
        </UpDown>
        <UpDownWide>
          <SVG
            hiddenMobile="true"
            icon="arrowUp"
            //width={16}//4rem
            width="4rem"
            stroke="false"
            color="--colors-icon_blue"
            left="80%"
            top="10%"
          />
          <SVG
            icon="triangle"
            //width={12}//3rem
            width="3rem"
            stroke="true"
            color="--colors-icon_brightest"
            left="90%"
            top="50%"
          />
          <SVG
            icon="circle"
            //width={16}//4rem
            width="4rem"
            stroke="false"
            color="--colors-icon_darker"
            left="70%"
            top="90%"
          />
          <SVG
            icon="triangle"
            //width={16}//4rem
            width="4rem"
            stroke="true"
            color="--colors-icon_blue"
            left="30%"
            top="65%"
          />
          <SVG
            icon="cross"
            //width={16}
            width="4rem"
            stroke="true"
            color="--colors-icon_blue"
            left="6%"
            top="15%"
            hiddenMobile="true"
          />
          <SVG
            icon="circle"
            //width={6}//1.5rem
            width="1.5rem"
            stroke="false"
            color="--colors-icon_darkest"
            left="75%"
            top="10%"
          />
          <SVG
            hiddenMobile="true"
            icon="upDown"
            //width={8}//2rem
            width="2rem"
            stroke="false"
            color="--colors-icon_darkest"
            left="45%"
            top="10%"
          />
        </UpDownWide>
        <SVG
          icon="circle"
          hiddenMobile="true"
          //width={24}//6rem
          width="6rem"
          stroke="false"
          color="--colors-icon_darker"
          left="5%"
          top="70%"
        />
        <SVG
          icon="circle"
          stroke="false"
          width="1.5rem"
          color="--colors-icon_yellow"
          left="4%"
          top="20%"
        />
        <SVG
          icon="circle"
          //width={12}//3rem
          width="3rem"
          stroke="false"
          color="--colors-icon_darkest"
          left="50%"
          top="60%"
        />
        <SVG
          icon="upDown"
          //width={8}
          width="2rem"
          stroke="false"
          color="--colors-icon_darkest"
          left="95%"
          top="90%"
        />
        <SVG
          icon="upDown"
          hiddenMobile="true"
          //width={24}
          width="6rem"
          stroke="false"
          color="--colors-icon_darker"
          left="40%"
          top="80%"
        />
        <SVG
          icon="triangle"
          //width={8}
          width="2rem"
          stroke="true"
          color="--colors-icon_darker"
          left="25%"
          top="5%"
        />
        <SVG
          icon="circle"
          //width={64}
          width="16rem"
          stroke="false"
          color="--colors-icon_green"
          left="95%"
          top="5%"
        />
        <SVG
          icon="box"
          hiddenMobile="true"
          //width={64}//16rem
          width="16rem"
          stroke="false"
          color="--colors-icon_purple"
          left="5%"
          top="90%"
        />
        <SVG
          icon="box"
          width="1.5rem"
          stroke="false"
          color="--colors-icon_darkest"
          left="10%"
          top="10%"
        />
        <SVG
          icon="box"
          width="3rem"
          stroke="false"
          color="--colors-icon_darkest"
          left="40%"
          top="30%"
        />
        <SVG
          icon="hexa"
          //width={16}
          width="4rem"
          stroke="true"
          color="--colors-icon_darker"
          left="10%"
          top="50%"
        />
        <SVG
          icon="hexa"
          //width={8}
          width="2rem"
          stroke="true"
          color="--colors-icon_darker"
          left="80%"
          top="70%"
        />
      </Divider>
      <Content
        /*sx={{ variant: `texts.bigger` }}*/ speed={0.4}
        offset={offset}
        factor={factor}
      >
        <Inner>
          <h1
            css={css`
              text-transform: uppercase;
              font-size: 2.8rem;

              line-height: 1.25;
              margin: 1rem 0 1rem 0;
              letter-spacing: 3px;
              @media (min-width: 600px) {
                font-size: 4rem;
              }
              @media (min-width: 800px) {
                font-size: 6rem;
                letter-spacing: 5px;
              }
            `}
          >
            DECORWOOD
          </h1>
          <h3
            css={css`
              font-size: 1.8rem;
              font-weight: 500;
              color: var(--colors-icon_orange);
              @media (min-width: 800px) {
                font-size: 2.5rem;
              }
            `}
          >
            Jedinstveni Dekoratvni Predmeti Od Drveta
          </h3>
        </Inner>
      </Content>
    </div>
  )
}

//Uniq And Stylish Decorative Items
export default Hero
