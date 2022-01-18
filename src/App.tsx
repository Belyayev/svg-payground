import React, { useState } from "react";
import SvgComponent from "./SvgComponent";
import "./App.css";

function App() {
  let [x, setX] = useState(100);
  let [y, setY] = useState(150);

  return (
    <div className="App">
      <h1>SVG playground</h1>
      <div>
        <SvgComponent x={x} y={y} />
      </div>
      <div>
        <button onClick={() => setY(y - 10)}>up</button>
        <button onClick={() => setY(y + 10)}>down</button>
        <button onClick={() => setX(x - 10)}>left</button>
        <button onClick={() => setX(x + 10)}>right</button>
      </div>
    </div>
  );
}

export default App;
