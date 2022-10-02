import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="New York"/>
        <footer>
          This project is created by Astrid VU and is {" "}
        <a href="https://github.com/astrid595/react-weather-app" target="_blank" rel="noopener noreferrer"> open sourced on Github </a>
        </footer>
      </div>
    </div>
  );
}
