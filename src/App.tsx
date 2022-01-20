import React, { useState } from "react";
import "./App.css";
import SvgButton from "./SVGComponents/SvgButton";

function App() {
  let [x, setX] = useState(200);
  let [y, setY] = useState(50);

  return (
    <div className="App">
      <header>
        <h1>SVG playground</h1>
      </header>
      <main>
        <div className="main">
          <SvgButton text="Home" x={150} y={40} />
          <SvgButton />
        </div>
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
