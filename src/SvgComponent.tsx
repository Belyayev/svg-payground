import React from "react";

interface ISvg {
  x: number;
  y: number;
}

function SvgComponent(props: ISvg) {
  let x = props.x;
  let y = props.y;

  return (
    <div className="App">
      <svg
        width="300"
        height="300"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="20" y1="149.5" x2={x} y2={y} stroke="red" />
        <line x1={x} y1={y} x2="277" y2="149.5" stroke="blue" />
      </svg>
    </div>
  );
}

export default SvgComponent;
