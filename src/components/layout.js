import React, { useContext } from "react"
import { useTransition, config } from "react-spring"

import { GatsbyContext } from "../context/context"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import Testonja from "./Testonja"

const Layout = ({ children, className = `` }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  const transitions = useTransition(isSidebarOpen, null, {
    initial: { height: "0px" }, //Not required
    from: { height: "0px" },
    enter: { height: "80vh" },
    leave: { height: "0px" },
    config: config.wobbly,
  })

  return (
    <React.Fragment>
      <Navbar></Navbar>
      {transitions.map(
        ({ item, key, props }) =>
          item && <Testonja key={key} style={props}></Testonja>
      )}
      {/*isSidebarOpen && <Sidebar></Sidebar>*/}
      <main className={className}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
