import { motion } from "framer-motion";
import { MapType } from "../../types/MapType";

export default function Track({
  stations,
  from,
  to,
}: {
  stations: MapType;
  from: number;
  to: number;
}) {
  const fromPos = stations.stations[from];
  const toPos = stations.stations[to];

  const angle = Math.atan2(toPos.y - fromPos.y, toPos.x - fromPos.x) * (180 / Math.PI);
  const length = Math.sqrt(Math.pow(toPos.x - fromPos.x, 2) + Math.pow(toPos.y - fromPos.y, 2));

  return (
    <motion.div
      className="absolute h-2 first:bg-blue-500 last:bg-green-500 [&:nth-child(2n)]:bg-yellow-500  bg-red-500 z-30"
      style={{
        x: fromPos.x,
        y: fromPos.y,
        rotate: angle,
        width: length,
        transformOrigin: "center left",
        translateY: "-50%",
      }}
    ></motion.div>
  );
}
