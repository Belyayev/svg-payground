interface ISvg {
  x: number;
  y: number;
}

function SvgComponent(props: ISvg) {
  let x = props.x;
  let y = props.y;

  return (
    <div className="Line">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="400" height="200" fill="transparent" stroke="black" />
        <line x1="20" y1="50" x2={x} y2={y} stroke="red" />
        <line
          x1={x}
          y1={y}
          x2="350"
          y2="50"
          stroke="blue"
          onMouseDown={() => console.log("clicked")}
          onMouseOver={() => console.log("MouseOver")}
        />
      </svg>
    </div>
  );
}

export default SvgComponent;
