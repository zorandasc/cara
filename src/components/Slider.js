import React, { useRef } from "react"
import styled from "styled-components"
import {
  useSprings,
  animated,
  interpolate,
  config,
} from "react-spring"
import { useGesture } from "react-use-gesture"
import {
  GoTriangleLeft,
  GoTriangleRight
} from "react-icons/go"

import slides from "../constants/slideData"



const from = i => ({ xTrans: 0, rot: 0, opacity: 0,  })

const to = (i, slideIndex) => {
  let index = slides.length + (slideIndex - i)
  return {
    xTrans: index,
    rot: index === 0 ? 0 : index > 0 ? 1 : -1,
    opacity: index === 0 ? 1 : 0.6,
    scale: 1,
    xMouse:0,
    yMouse:0,
   
  }
}

const trans = (xTrans, xMouse, yMouse, r, s) =>
  `perspective(800px) translateX(calc(100% * ${xTrans})) rotateX(${xMouse}deg) rotateY(calc(-65deg*${r} + ${yMouse}deg)) scale(${s}) `



const Slider = () => {
  //ne dovodi do rerenderovanja  komponente za razliku od usestate
  const slideIndex = useRef(0)
  let current=slideIndex.current

  const [springs, setSprings] = useSprings(
    [...slides, ...slides, ...slides].length,
    i => ({
      ...to(i, current),
      from: { ...from(i) },
      config: config.molasses,
    })
  )

  const bind=useGesture({
   
    onMove:({
      args: [index],
      xy: [px, py]})=>{
        setSprings(i => {
          //DA bi se specilo da se svi ne pomjeraju koristimo index==i
          //odnosno ovim dobijamo da se samo jedan taknuti i pomjera
          //a da bi se onemogucilo da se se susjedni ,rotiranin, na klik ne pomjeraju
          //koristimo slides.length + (slideIndex.current - i)==0
          if (index === i && slides.length + (current - i) === 0) {
            
            const xMouse=-(py - window.innerHeight / 2) / 10
            const yMouse=(px - window.innerWidth / 2) / 10
            const scale = 1.2
            return { xMouse,yMouse,scale,  config: { mass: 5, tension: 350, friction: 40 } }
            }
          
          return
          
        },)
      },
      onHover:()=>{   
        setSprings(i => {
          return { xMouse:0,yMouse:0,scale:1,config:config.molasses }
        })
      }
  })///GESTURE, ODNSONO ONMOVE MIJENJA SAMO OVE PARAMETRE xMouse,yMouse,scale, 
  // I TO NA O ITEMU, ONHOVER VRACA NA POCETNO


  

  const handleNext = () => {
    current = (current + 1) % slides.length
    setSprings(i => ({ ...to(i, current)}))
  }
  const handlePrev = () => {
    current =
      current === 0 ? slides.length - 1 : current - 1
    setSprings(i => ({ ...to(i, current)}))
  }

  return (
    
      <Wrapper>
        <div className="slides">
          {springs.map(({ xTrans, xMouse,yMouse, rot, opacity, scale, }, i) => {
            //i ide od 0 do 14
            //prave vrijednosti,  se ponavljaju da bi se dobio efekat
            //kontinualnosti, stog j ide
            let j = i % slides.length
            //j ide od 0 do 4
            return (
              <animated.div key={i} className="slide" 
              >
                {/*
                <animated.div
                  className="slideBackground"
                  style={{
                    opacity: opacity.interpolate({
                      range: [0.6, 1],
                      output: [0, .9],
                    }),
                    backgroundImage: `url(${slides[j].image})`,
                    transform:rot.interpolate(r=>`translateX(calc(10% * ${r}))`)
                  }}
                ></animated.div>
                    */}
                <animated.div
                  {...bind(i)}
                  className="slideContent"
                  style={{
                    
                    backgroundImage: `url(${slides[j].image})`,
                    transform: interpolate([xTrans, xMouse,yMouse, rot, scale], trans),
                    //opacity,
                    
                  }}
                >
                  <animated.div
                    className="slideContentInner"
                    style={{
                      opacity: opacity.interpolate({
                        range: [0.6, 1],
                        output: [0, 1],
                      }),
                      transform: rot.interpolate(
                        t => `translate3d(0,calc(80% *(-1)* ${t}), 4rem)`
                      ),
                    }}
                  >
                    <h2 className="slideTitle">{slides[j].title}</h2>
                    <h3 className="slideSubtitle">{slides[j].subtitle}</h3>
                    <p className="slideDescription">{slides[j].description}</p>
                  </animated.div>
                </animated.div>
              </animated.div>
            )
          })}
          <button className="prev" onClick={handlePrev}>
            <i><GoTriangleLeft></GoTriangleLeft></i>
          </button>
          <button className="next" onClick={handleNext}>
            <i><GoTriangleRight></GoTriangleRight></i>
          </button>
        </div>
        <div className="drugiSektor"></div>
      </Wrapper>
   
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display:none;
  @media (min-width: 800px) {
       display:block;
   }
  .slides {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
  }
  .slide {
    grid-area: 1/-1;
  }

  .slideContent {
    //border:2px solid red;
    width: 30vw;
    max-width: 300px;
    height: 50vw;
    max-height: 500px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    display: grid;
    align-items: center;
    border-radius:8px;
  }
  /*
  .slideBackground {
    position: fixed;
    top: 0;
    left: -10%;
    right: -10%;
    bottom: 0;
    background-size: cover;
    background-position: center center;
    z-index: -1;
  }
  .slideBackground::before {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;}
*/
  .slideContentInner {
    padding-left:4rem;
    color: var(--clr-white);
    transform-style: preserve-3d;
    text-shadow: 0 0.1rem 1rem #000;
  }
  .slideSubtitle,
  .slideTitle {
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 0.2ch;
    text-transform: uppercase;
    margin: 0;
  }
  .slideSubtitle::before {
    content: "— ";
  }
  .slideDescription {
    margin: 0;
    font-size: 0.8rem;
    letter-spacing: 0.2ch;
  }

  button {
    //background: transparent;
    background: var(--colors-textMuted);
    //color: #777;
    color: var(--colors-text);
    outline: none;
    position: absolute;
    font-size: 1rem;
    border-radius: 8px;
    width: 5rem;
    height: 5rem;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.8;
    z-index: 2;
    cursor: pointer;
    box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15),
      -6px -6px 10px -1px rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(0, 0, 0, 0);
    transition: transform 0.5s;
    &:hover {
      box-shadow: inset 4px 4px 6px -1px rgba(0, 0, 0, 0.6),
        inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7),
        -0.5px -0.5px 0px rgba(255, 255, 255, 1),
        0.5px 0.5px 0px rgba(0, 0, 0, 0.15),
        0px 12px 10px -10px rgba(0, 0, 0, 0.05);
      border: 1px solid rgba(0, 0, 0, 0.01);
      
    }
    i {
      font-size: 35px;
      color: #777;
      line-height: 0;
    }
  }
  .prev {
    left: 20%;
  }
  .next {
    right: 20%;
  }

  
`

export default Slider
