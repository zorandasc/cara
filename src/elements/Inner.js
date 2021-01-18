/** @jsx jsx */
import { jsx, css } from "@emotion/react"
//import React from "react"

const Inner = ({ children, className = "" }) => {
  return (
    <div
      css={css`
        //border: 1px solid red;
        text-align: center;
        width: 100%;
        @media (min-width: 800px) {
          width: 75%;
        }
      `}
      className={className}
    >
      {children}
    </div>
  )
}

export default Inner
