import React, { useContext } from "react"

import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
import { GatsbyContext } from "../context/context"

const Layout = ({ children, className = `` }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <React.Fragment>
      <Navbar></Navbar>
      {isSidebarOpen && <Sidebar></Sidebar>}
      <main className={className}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
