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
    buttonStyle = { fill: "blue", transition: "1s ease" };
  } else {
    buttonStyle = { fill: "transparent", transition: "1s ease" };
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
