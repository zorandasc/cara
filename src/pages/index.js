import React,{useContext} from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"

import { GatsbyContext } from "../context/context"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import About from "../components/About"
import Contact from "../components/Contact"

const IndexPage = () => {
  let { setParall } = useContext(GatsbyContext)
  return <Layout>
    <Parallax pages={5} ref={ref=>setParall(ref)}>
      <Hero offset={0} factor={1}></Hero>
      <Projects offset={1} factor={2}></Projects>
      <About offset={3} factor={1}></About>
      <Contact offset={4} factor={1}></Contact>
    </Parallax>
  </Layout>
}

export default IndexPage
