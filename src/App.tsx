import React, { useState } from "react";
import "./App.css";
import SvgButton from "./SVGComponents/SvgButton";
import SvgBackground from "./SVGComponents/SvgBackground";

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
          <SvgButton text="Home" x={120} y={35} />
          <SvgButton />
          <SvgButton text="smaller" color="red" x={100} y={30} />
        </div>
      </main>
      <footer>
        <div className="footer">
          <button onClick={() => setY(y - 10)}>up</button>
          <button onClick={() => setY(y + 10)}>down</button>
          <button onClick={() => setX(x - 10)}>left</button>
          <button onClick={() => setX(x + 10)}>right</button>
        </div>
      </footer>
      <SvgBackground />
    </div>
  );
}

export default App;
