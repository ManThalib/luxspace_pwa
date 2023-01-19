import React from 'react';
import Arrived from './components/Arrived';
import Aside from './components/Aside';
import Browse from './components/Browse';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import './tailwind.css';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}

export default App;
