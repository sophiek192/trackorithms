import { MapType } from "../../../types/MapType";

const LEVEL1 = {
  stations: [
    { x: 300, y: 500, name: "Making your first website!" },
    { x: 800, y: 700, name: "Trackorithms" },
    { x: 800, y: 400, name: "Design an app" },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
} as const satisfies MapType;

export default LEVEL1;
