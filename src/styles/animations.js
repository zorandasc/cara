import { css, keyframes } from "@emotion/react"
import styled from "@emotion/styled"

//The shape of a <path> element is defined by one arameter: d. (See more in basic shapes.) The d attribute contains a series of commands and parameters used by those commands.

const wave = keyframes`
    0% {
        d:path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
    }
    50% {
        d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
    }
    100%{
        d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
    }
`

const upDownFrame = keyframes`
from{
    transform: translateY(0);
}
to{
    transform: translateY(30px);
}
`

const upDownWideFrame = keyframes`
from{
    transform: translateY(0);
}
to{
     transform: translateY(200px);
}
`
//animaciona funkcija
const upDownAnimation = props => css`
  animation: ${upDownFrame} 4s ease-in-out infinite alternate;
`
//animaciona funkcija
const upDownWideAnimation = props => css`
  animation: ${upDownWideFrame} 16s ease-in-out infinite alternate;
`

export const UpDown = styled.div`
  ${upDownAnimation}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const UpDownWide = styled.div`
  ${upDownWideAnimation}
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

//expor css objekat koji sadrzi animation proporty
export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`
