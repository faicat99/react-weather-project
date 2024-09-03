import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Weather-container">
          <Weather defaultCity="london" />
        <footer>
          This project was coded by {" "}
          <a href="https://www.github.com/faicat99">Fainche Mckeown</a>{" "} and is {" "}
          hosted on {" "} <a href="https://www.github.com/faicat99"> Github</a>{" "} and {" "}
          <a href="https://react-weather-app-react-project.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>

  );
}