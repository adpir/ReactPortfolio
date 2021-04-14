import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

//layouts- but I called it hero
import Hero from './components/Hero/index'
import Header from './components/Header'
import Dropdown from './components/Dropdown';

import Footer from './components/Footer';

//another section including the pages
import About from './pages/About'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });



  return (
    <>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>

        <Route exact path="/" component={Home} />
        {/* <ScrollLink to path="/about" component={About} /> */}
      </Switch>
      <Hero />
      <About />
      < Portfolio />

      <Skills />
      <Footer />
      {/* <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
        <Footer /> */}
      {/* </div> */}
      <Route />
    </>

  );
}

export default App;
