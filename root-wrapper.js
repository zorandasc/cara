import React from "react"
import { createGlobalStyle } from "styled-components"

import { GatsbyProvider } from "./src/context/context"

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
--colors-background: #141821;
--colors-grayDark:#2d3748;
--colors-text:#e2e8f0;
--colors-background:#141821;
--colors-primary:#f6ad55;
--colors-primaryHover:#2c5282;
--colors-secondary:#5a67d8;
--colors-muted:#e2e8f0;
--colors-success:#9ae6b4;
--colors-info:#63b3ed;
--colors-warning:#faf089;
--colors-danger:#feb2b2;
--colors-light:#f7fafc;
--colors-dark:#2d3748;
--colors-textMuted:#a0aec0;
--colors-heading:#fff;
--colors-divider:#2d3748;
--colors-icon_brightest:#fff;
--colors-icon_darker:#4a5568;
--colors-icon_darkest:#2d3748;
--colors-icon_red:#e53e3e;
--colors-icon_blue:#3182ce;
--colors-icon_orange:#ed8936;
--colors-icon_yellow:#ecc94b;
--colors-icon_pink:#ed64a6;
--colors-icon_purple:#805ad5;
--colors-icon_green:#48bb78;
  /* dark shades of primary color*/
  --clr-primary-1: hsl(21, 91%, 17%);
  --clr-primary-2: hsl(21, 84%, 25%);
  --clr-primary-3: hsl(21, 81%, 29%);
  --clr-primary-4: hsl(21, 77%, 34%);
  /* primary/main color */
  --clr-primary-5: hsl(21, 62%, 45%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(21, 57%, 50%);
  --clr-primary-7: hsl(21, 65%, 59%);
  --clr-primary-8: hsl(21, 80%, 74%);
  --clr-primary-9: hsl(21, 94%, 87%);
  --clr-primary-10: hsl(21, 100%, 94%);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: #f1f5f8;
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --ff-primary: "Roboto", sans-serif;
  --ff-secondary: "Open Sans", sans-serif;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --darkShadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  --text-shadow:3px 3px 3px rgba(0, 0, 0, 0.8);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: var(--ff-secondary);
  background: var(--colors-background);
  color: var(--colors-text);
  line-height: 1.5;
  font-size: 0.875rem;
  //ovo da se sprijeci overscroll kod using gesture
  overscroll-behavior-x: none;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img {
  width: 100%;
  display: block;
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: "Caveat", cursive;
  font-weight: 600;
  text-shadow: var(--text-shadow);
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--colors-text);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4.5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}

/*  global classes */
.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid transparent;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  background: var(--clr-primary-7);
  color: var(--clr-primary-1);
}

/* section */
.section {
  padding: 5rem 0;
  position: relative;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
`

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
