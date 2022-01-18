import React from "react";
import { ReactComponent as Logo } from "./svg/lines.svg";
import lines from "./svg/lines.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>SVG playground</h1>
      <div>
        <img src={lines} alt="lines" />
        <Logo x1={50} y1={44} />
      </div>
    </div>
  );
}

export default App;
