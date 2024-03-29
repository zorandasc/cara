import React, { useState } from "react"
import styled from "styled-components"
import { useSprings, animated, interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"

const cards = [
  "https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg",
  "https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
  "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg",
]

//helperske funkcije
//svaki spring je deklarisan sa: x,y , scal, rot
const from = i => ({ x: -1000, y: 0, scale: 1.5, rot: 0 })
const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 30,
  delay: i * 200,
})
//to i from funkcije vracaju objekte
//promjenjive unutar objekat se mjenjaju tokom gesturea, koje vraca setSpring

const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`

const Deck = () => {
  //The set flags all the cards that are flicked out
  const [gone] = useState(() => new Set())
  //to i from unutar setsprings se dogadjau samo prvi put tokom loadovanja stranice
  //za sve springove
  // Create a bunch of springs using the helpers above
  const [springs, setSprings] = useSprings(cards.length, i => ({
    ...to(i),
    from: { ...from(i) },
  }))

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [xMove],
      direction: [xDir],
      velocity,
    }) => {
      // If you flick hard enough it should trigger the card to fly out
      const trigger = velocity > 0.2
      // Direction should either point left or right
      const dir = xDir < 0 ? -1 : 1

      // If button/finger's up and trigger velocity is reached,
      // we flag the card ready to fly out
      if (!down && trigger) gone.add(index)

      //i ide za sve springove
      setSprings(i => {
        // We're only interested in changing spring-data for the current spring
        if (index !== i) {
          return
        }

        //da li je dotaknuta karta, ubacena u niz za izbacaj
        const isGone = gone.has(index)

        // When a card is gone it flys out left or right,
        //otherwise  prATI misonju xMove, ili ako nije down goes back to zero
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xMove : 0

        //ako nije otisao rotiraj za xmow/100, a ako je otisao
        //dodaj dir * 10 * velocity
        const rot = xMove / 100 + (isGone ? dir * 10 * velocity : 0)

        // Active cards lift up a bit
        const scale = down ? 1.1 : 1

        //I SAD samo vrati gesturom promjenjenj vroijdenost springova
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      //vrati sve na pocetak ako su svi otisli
      if (!down && gone.size === cards.length) {
        setTimeout(() => {
          gone.clear() || setSprings(i => to(i))
        }, 600)
      }
    }
  )

  // Now we're just mapping the animated values to our view, that's it.
  //Btw, this component only renders once. :-)

  //PRVI DIV ZUZIMA CIJELU STRANICU I IMA TRANSPARENY TBACKGROUND
  //DRUGI DIV JE SLIKA KOJA SE ROTIRA UNUTAR PRVOG DIVA
  //BIND JE NA DRUGOM DIVU, JER AKO BI BIO NA PRVOM ONDA BI CIJELU
  //STRANICU MOGLI GRABOVATI
  return (
    <Wrapper>
      {springs.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              backgroundImage: `url(${cards[i]})`,
            }}
          ></animated.div>
        </animated.div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 90%;
  position: relative;

  @media (min-width: 800px) {
    display: none;
  }

  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      cursor: grab;

      background-color: var(--clr-grey-9);

      width: 40vh;
      max-width: 300px;
      height: 65vh;
      max-height: 570px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: auto 90%;
      will-change: transform;
      border-radius: 10px;
      box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
        0 10px 10px -10px rgba(50, 50, 73, 0.3);
    }
  }
`

export default Deck
