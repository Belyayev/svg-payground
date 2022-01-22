import { useState } from "react";

interface ISvg {
  x?: number;
  y?: number;
  text?: string;
}

function SvgButton(props: ISvg) {
  let x = 200;
  if (props.x) x = props.x;
  let y = 50;
  if (props.y) y = props.y;
  let text = props.text;

  const [hover, setHover] = useState(false);

  let buttonStyle;
  if (hover) {
    buttonStyle = {
      fill: "#3bc1ff",
      opacity: "50%",
      transition: "1s ease",
      stroke: "transparent",
    };
  } else {
    buttonStyle = {
      fill: "transparent",
      transition: "1s ease",
      stroke: "white",
      opacity: "20%",
    };
  }

  let strokeStyle;
  if (hover) {
    strokeStyle = { transition: "1s ease", transform: "scale(1)" };
  } else {
    strokeStyle = { transition: "1s ease", transform: "scale(-1)" };
  }

  return (
    <div
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
      >
        <style type="text/css">
          @import url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono);
        </style>
        <rect style={buttonStyle} width={x} height={y} />
        <line
          style={strokeStyle}
          transform-origin="0 0"
          x1={x / 2 - x / 3}
          y1="1"
          x2={x / 2 + x / 3}
          y2="1"
          stroke="lime"
        />
        <line
          style={strokeStyle}
          transform-origin="200 50"
          x1={x / 2 + x / 3}
          y1={y - 1}
          x2={x / 2 - x / 3}
          y2={y - 1}
          stroke="lime"
        />
        <text
          text-anchor="middle"
          x={x / 2}
          y={y / 2 + 5}
          fill="lime"
          fontFamily="Share Tech Mono"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}

SvgButton.defaultProps = {
  text: "button",
};

export default SvgButton;
