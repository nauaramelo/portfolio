import React from 'react';
import './App.css';
import { Header } from './containers/Header';
import { QuemSou } from './containers/QuemSou';
import { SobreMim } from './containers/SobreMim';
import { OQueFaco } from './containers/OQueFaco';
import { Educacao } from './containers/Educacao';
import { Projetos } from './containers/Projetos';

function App() {
  return (
    <div className="App">
      <Header />
      <QuemSou />
      <SobreMim />
      <OQueFaco />
      <Educacao />
      <Projetos />
    </div>
  );
}

/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */

export default App;
