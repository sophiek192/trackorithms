import { MapType } from "../../types/MapType";

const STATIONS = {
  stations: [
    { x: 300, y: 500 },
    { x: 800, y: 700 },
    { x: 800, y: 400 },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
} as const satisfies MapType;

export default STATIONS;
