import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
//layouts- but I called it hero
import Hero from './components/Hero/index'
import Header from './components/Header'
import Dropdown from './components/Dropdown';

//another section including the pages
import Home from './pages/Home'

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
        <Route path="/">
          <Hero heading="
           Creative, Passionate, Designer, Leader and Sotfware Enginner ">
            <Home />
          </Hero>


          {/* <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
        <Footer /> */}
          {/* </div> */}
        </Route>
      </Switch>
    </>
  );
}

export default App;
