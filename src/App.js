import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/skills";

import Portfolio from "./components/portfolio/Portfolio";

import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Social from "./components/socials/Social";

export const App = () => {
  return (
    <>
    <Social/>
      <Header />
      <Nav />
      <About />

      <Portfolio />
      <Skills/>

      <Contact />
      <Footer />
    </>
  );
};

export default App;