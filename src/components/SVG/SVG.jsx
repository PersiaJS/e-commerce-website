export default function SVG({
  fill = "currentColor",
  id,
  width = "16",
  height = "16",
}) {
  return (
    <div className="flex items-center">
      <svg width={width} height={height} fill={fill}>
        <use href={`#${id}`}></use>
      </svg>
    </div>
  );
}
