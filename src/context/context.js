import React, { useState } from "react"

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  //const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  //ZA SKROLOVANJE KLIKOM U NAVABARU ZA PARALLEXU U INDEXU
  const [parall, setParall] = useState(null)
  
/*
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }
*/
  return (
    <GatsbyContext.Provider
      value={{
       // isSidebarOpen,
       // showSidebar,
       //toggleSidebar,
       // hideSidebar,
        parall,
        setParall
      }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
