import './index.css';
import React from 'react';
import Home from './Box/home';
import About from './Box/About';
import Services from './Box/Services';
import Contact from './Box/Contact';
import Footer from './Box/footer';

function App() {
  return (
    <div class=' main'>
      <Home />

      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
