interface ISvg {
  x?: number;
  y?: number;
}

function SvgButton(props: ISvg) {
  let x = props.x;
  let y = props.y;

  return (
    <div>
      <svg
        display="block"
        width="200"
        height="50"
        viewBox="0 0 200 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="50" fill="lime" />
      </svg>
    </div>
  );
}

export default SvgButton;
