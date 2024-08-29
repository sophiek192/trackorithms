import { MapType } from "../../../types/MapType";

const LEVEL2 = {
  stations: [
    { x: 100, y: 200, name: "Tokyo" },
    { x: 500, y: 400, name: "Kyoto" },
    { x: 300, y: 600, name: "Penrith" },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
} as const satisfies MapType;

export default LEVEL2;
