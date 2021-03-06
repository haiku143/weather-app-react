import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Honolulu" />
        <footer>
          Coded by Shantel Scott, open-sourced on{" "}
          <a
            href="https://github.com/haiku143/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
            className="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
