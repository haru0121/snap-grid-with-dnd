export default function snapToGrid(x, y, grid = 32) {
  const snappedX = Math.round(x / grid) * grid;
  const snappedY = Math.round(y / grid) * grid;
  return [snappedX, snappedY];
}
