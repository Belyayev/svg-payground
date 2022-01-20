interface ISvg {
  x?: number;
  y?: number;
}

function SvgButton(props: ISvg) {
  let x = 200;
  let y = 50;

  return (
    <div>
      <svg
        display="block"
        width={x}
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={x} height={y} fill="lime" />
        <text text-anchor="middle" x={x / 2} y={y / 2 + 5} fill="black">
          Text
        </text>
      </svg>
    </div>
  );
}

export default SvgButton;
