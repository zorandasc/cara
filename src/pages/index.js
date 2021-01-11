import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"



const IndexPage = () => (
  <Layout>
    <Parallax>
      <h1>INDEX PAGE</h1>
      <Hero></Hero>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </Parallax>
  </Layout>
)

export default IndexPage
