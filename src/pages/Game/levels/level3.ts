import { MapType } from "../../../types/MapType";

const LEVEL3 = {
  stations: [
    { x: 300, y: 500, name: "Making your first website!" },
    { x: 800, y: 700, name: "Trackorithms" },
    { x: 800, y: 400, name: "Design an app" },
    { x: 500, y: 300, name: "Build a text adventure game" },
    { x: 200, y: 650, name: "Intro to security" },
    { x: 600, y: 600, name: "Work with databases" },
    { x: 700, y: 500, name: "Build a portfolio" },
  ],
  connections: [
    [0, 1],
    [1, 2],
    [0, 2],
    [2, 3],
    [0, 3],
    [0, 4],
    [1, 4],
    [3, 5],
    [4, 6],
    [5, 6],
  ],
} as const satisfies MapType;

export default LEVEL3;
