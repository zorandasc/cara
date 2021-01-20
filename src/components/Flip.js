import React, { useState } from "react"
import { useSpring, animated as a } from "react-spring"
import styled from "styled-components"
import Img2 from "../images/123.jpg"
import Img1 from "../images/321.jpg"

/*
const Img1 =
  "https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop"

const Img2 =
  "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop"

*/
function Flip() {
  const [fliped, setFliped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: fliped ? 1 : 0,
    transform: `perspective(600px) rotateX(${fliped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <Wrapper
      onClick={() => setFliped(!fliped)}
      onTouchStart={() => setFliped(!fliped)}
    >
      {/*SVA SLIKA KAD JE JEDNA OPACITY 1 DRUHA MORA BITII O ZATO INTERPOLATE, TAKODJE KAD SE ROTIRA FRONT DA NE BUDE NAGLAVACKE ZATO INTERPOLATE*/}
      <a.div
        className="c back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      ></a.div>
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      ></a.div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 35ch;
  height: 35ch;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  will-change: transform, opacity;
  &::before {
    position: absolute;
    content: "SWIPE ME, AKO SMEŠ :-)";
    color: var(--colors-warning);
    font-size: 1.5rem;
    font-family: "Caveat", cursive;
    top: -3rem;
    left: 0;
  }
  @media (min-width: 390px) {
    width: 45ch;
    height: 45ch;
  }
  .c {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
      0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }

  .front,
  .back {
    background-position: center center;
    background-size: cover;
  }
  .back {
    background-image: url(${Img2});
  }
  .front {
    background-image: url(${Img1});
  }
`

export default Flip
