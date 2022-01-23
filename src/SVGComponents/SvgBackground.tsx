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

function SvgBackground() {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: "-1",
        background: "rgb(10, 14, 27)",
        backgroundSize: "cover",
      }}
    >
      <svg
        display="block"
        width="100%"
        viewBox="0 0 500 1000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="50"
              height="50"
              fill="none"
              stroke="lime"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export default SvgBackground;
