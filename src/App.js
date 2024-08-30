import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Weather-container">
          <Weather />
        <footer>
          This project was coded by {" "}
          <a href="https://www.github.com/faicatmck">Fainche Mckown</a>{" "} and is {" "}
          hosted on {" "} <a href="https://www.github.com/faicatmck"> Github</a>{" "} and {" "}
          <a href="https://www.netlify.com/faicatmck">Netlify</a>
        </footer>
      </div>
    </div>

  );
}