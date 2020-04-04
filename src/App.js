import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Shantel Scott and is
          <a
            href="https://github.com/haiku143/weather-app-react"
            target="_blank"
            className="_blank"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
