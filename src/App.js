import React from 'react';
import './App.css';
import { Header } from './containers/Header';
import { QuemSou } from './containers/QuemSou';

function App() {
  return (
    <div className="App">
      <Header />
      <QuemSou />
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
