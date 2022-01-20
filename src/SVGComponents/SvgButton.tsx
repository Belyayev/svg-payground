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

  return (
    <div>
      <svg
        display="block"
        width={x}
        height={y}
        viewBox="0 0 {{x}} {{y}}"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <style type="text/css">
            @import
            url(https://fonts.googleapis.com/css2?family=Share+Tech+Mono);
          </style>
        </defs>
        <rect width={x} height={y} fill="lime" />
        <text
          text-anchor="middle"
          x={x / 2}
          y={y / 2 + 5}
          fill="black"
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
