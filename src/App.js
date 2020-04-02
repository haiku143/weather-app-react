import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        Coded by Shantel Scott
        <a href="https://github.com/haiku143/weather-app-react" target="_blank">
          open-sourced on github
        </a>
      </footer>
    </div>
  );
}

export default App;
