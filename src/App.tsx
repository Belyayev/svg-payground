import React, { useState } from "react";
import SvgComponent from "./SvgComponent";
import "./App.css";

function App() {
  let [x, setX] = useState(200);
  let [y, setY] = useState(50);

  return (
    <div className="App">
      <header>
        <h1>SVG playground</h1>
      </header>
      <main>
        <SvgComponent x={x} y={y} />
      </main>
      <footer>
        <button onClick={() => setY(y - 10)}>up</button>
        <button onClick={() => setY(y + 10)}>down</button>
        <button onClick={() => setX(x - 10)}>left</button>
        <button onClick={() => setX(x + 10)}>right</button>
      </footer>
    </div>
  );
}

export default App;
