import React from "react"

import Navbar from "./Navbar"


const Layout = ({ children, className = `` }) => {

  return (
    <React.Fragment>
      <Navbar></Navbar>
      <main className={className}>{children}</main>
    </React.Fragment>
  )
}

export default Layout
