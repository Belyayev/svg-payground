/*
Sci-Fi styled react component button
made using SVG with animations on hover and click
it takes optional parameters for size, color and text
all functionality is packed into single component file
--------------------------------------------
import SvgButton from "./SvgButton";
<SvgButton text="home" color="red" x={100} y={30} />
--------------------------------------------
https://github.com/Belyayev/svg-payground
*/

import { useState } from "react";
interface ISvg {
  x?: number;
  y?: number;
  text?: string;
  color?: string;
}

function SvgButton(props: ISvg) {
  let color = "lime";
  if (props.color) {
    color = props.color;
  }

  let x = 150;
  if (props.x) x = props.x;
  let y = 40;
  if (props.y) y = props.y;
  let text = props.text;

  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);

  let circleStyle;
  if (click) {
    circleStyle = {
      transition: "0.5s",
      transform: "scale(1)",
    };
  } else {
    circleStyle = {
      transform: "scale(0)",
    };
  }

  let rectStyle;
  if (hover) {
    rectStyle = {
      transition: "1s ease",
      fill: color,
      transform: "scale(1.3)",
    };
  } else {
    rectStyle = {
      transition: "1s ease",
      fill: color,
      transform: "scale(0)",
    };
  }

  let strokeStyle;
  if (hover) {
    strokeStyle = { transition: "1s ease", transform: "scale(1)" };
  } else {
    strokeStyle = { transition: "1s ease", transform: "scale(0)" };
  }

  let anglesStyle;
  if (hover) {
    anglesStyle = { transition: "0.5s ease", transform: "scale(0.9)" };
  } else {
    anglesStyle = {
      transition: "0.5s ease",
      transform: "scale(1)",
    };
  }

  return (
    <div
      style={{
        margin: "1rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        display="block"
        width={x}
        height={y}
        viewBox="0 0 {{x}} {{y}}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        onMouseDown={() => setClick(true)}
        onMouseMove={() => setClick(false)}
      >
        <circle fill="orange" cy="100" r="20">
          <animate
            attributeName="cx"
            from="50"
            to="250"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono);
        </style>
        <line
          style={strokeStyle}
          transform-origin="top center"
          x1={x / 2 - x / 3}
          y1="2"
          x2={x / 2 + x / 3}
          y2="2"
          stroke={color}
        />
        <line
          style={strokeStyle}
          transform-origin="0 50%"
          x1="0"
          y1={y / 2}
          x2="10"
          y2={y / 2}
          stroke={color}
        />
        <line
          style={strokeStyle}
          transform-origin="100% 50%"
          x1={x}
          y1={y / 2}
          x2={x - 10}
          y2={y / 2}
          stroke={color}
        />
        <line
          style={strokeStyle}
          transform-origin="bottom center"
          x1={x / 2 + x / 3}
          y1={y - 2}
          x2={x / 2 - x / 3}
          y2={y - 2}
          stroke={color}
        />
        <text
          textAnchor="middle"
          x={x / 2}
          y={y / 2 + 5}
          fill={color}
          fontFamily="Share Tech Mono"
        >
          {text}
        </text>
        <g style={anglesStyle} transform-origin="50% 50%">
          <line x1="0" y1="0" x2="10" y2="0" stroke={color} />
          <line x1="0" y1="0" x2="0" y2="10" stroke={color} />
          <line x1={x} y1={y} x2={x} y2={y - 10} stroke={color} />
          <line x1={x} y1={y} x2={x - 10} y2={y} stroke={color} />
          <line x1="0" y1={y} x2="10" y2={y} stroke={color} />
          <line x1="0" y1={y} x2="0" y2={y - 10} stroke={color} />
          <line x1={x} y1="0" x2={x} y2="10" stroke={color} />
          <line x1={x} y1="0" x2={x - 10} y2="0" stroke={color} />
          <rect style={rectStyle} x="3" y="3" width="5" height="5" />
          <rect
            style={rectStyle}
            x={x - 8}
            y={y - 8}
            width="5"
            height="5"
            transform-origin="bottom right"
          />
        </g>
        <circle
          style={circleStyle}
          cx={x / 2}
          cy={y / 2}
          r={x}
          stroke="white"
          stroke-width="20%"
          transform-origin="center center"
        />
      </svg>
    </div>
  );
}

SvgButton.defaultProps = {
  text: "button",
};

export default SvgButton;
