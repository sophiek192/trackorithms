export type MapType = {
  stations: { x: number; y: number; name: string }[]; // array of stations and their positions
  connections: [number, number][]; // array of edges
};
