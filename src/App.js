import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

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
import Contact from './pages/Contact';

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
      </Switch>

      <Hero />
      <About />
      < Portfolio />
      <Skills />
      <Contact />
      <Footer />
      <Route />
    </>

  );
}

export default App;
