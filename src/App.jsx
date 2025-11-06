import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
