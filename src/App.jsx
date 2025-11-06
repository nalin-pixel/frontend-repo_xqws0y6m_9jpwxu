import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Hero />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
