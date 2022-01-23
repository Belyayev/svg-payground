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

function SvgBackground(props: ISvg) {
  let x = 500;
  if (props.x) x = props.x;
  let y = 500;
  if (props.y) y = props.y;

  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        zIndex: "-1",
        background: "red",
      }}
    >
      <svg
        display="block"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width={x}
          height={y}
          transform-origin="bottom right"
          fill="gray"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default SvgBackground;
