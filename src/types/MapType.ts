export type MapType = {
  stations: { x: number; y: number }[]; // array of stations and their positions
  connections: [number, number][]; // array of edges
};
