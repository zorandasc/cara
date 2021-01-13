/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Global } from "@emotion/core"
import Header from "./Header"

const Layout = ({ children, className = `` }) => {
  return (
    <React.Fragment>
      <Global
        styles={theme => ({
          "*": {
            boxSizing: `inherit`,
            "&:before": {
              boxSizing: `inherit`,
            },
            "&:after": {
              boxSizing: `inherit`,
            },
          },
          html: {
            fontSize: `18px`,
            WebkitTextSizeAdjust: `100%`,
          },
          img: {
            borderStyle: `none`,
          },
          pre: {
            fontFamily: `monospace`,
            fontSize: `1em`,
          },
          "[hidden]": {
            display: `none`,
          },
          "::selection": {
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
          },
        })}
      ></Global>
      <Header></Header>
      <main className={className}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
