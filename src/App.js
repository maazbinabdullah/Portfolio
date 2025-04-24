import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Contacts from './components/Contacts';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="contactus"><Contacts/></section>
      <Footer />
    </div>
  );
}

export default App;
