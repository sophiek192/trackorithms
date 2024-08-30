import { MapType } from "../../../types/MapType";

const LEVEL2 = {
  stations: [
    { x: 300, y: 500, name: "Making your first website!" },
    { x: 800, y: 700, name: "Trackorithms" },
    { x: 800, y: 400, name: "Design an app" },
    { x: 500, y: 300, name: "Build a text adventure game" },
    { x: 200, y: 650, name: "Intro to security" },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
    [2, 3],
    [0, 3],
    [0, 4],
    [1, 4],
  ],
} as const satisfies MapType;

export default LEVEL2;
