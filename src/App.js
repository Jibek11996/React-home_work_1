import React from "react";
import logo from './logo.svg';
import './App.css';
import Ccomponent from "./Ccomponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ccomponent/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Home Work 1
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}
export default App;
