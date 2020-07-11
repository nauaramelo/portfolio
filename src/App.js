import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './containers/Header';
import { QuemSou } from './containers/QuemSou';
import { SobreMim } from './containers/SobreMim';
import { OQueFaco } from './containers/OQueFaco';
import { Educacao } from './containers/Educacao';
import { Projetos } from './containers/Projetos';
import { Contact } from './containers/Contact';
import { Footer } from './containers/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <QuemSou />
      <SobreMim />
      <OQueFaco />
      <Educacao />
      <Projetos />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
