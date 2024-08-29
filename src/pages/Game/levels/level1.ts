import { MapType } from "../../../types/MapType";

const LEVEL1 = {
  stations: [
    { x: 300, y: 500, name: "Central" },
    { x: 800, y: 700, name: "Martin Pl" },
    { x: 800, y: 400, name: "Penrith" },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
} as const satisfies MapType;

export default LEVEL1;
