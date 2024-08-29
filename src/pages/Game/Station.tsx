import { motion, useMotionValue } from "framer-motion";
import { MapType } from "../../types/MapType";

export default function Station({ id, stations }: { id: number; stations: MapType }) {
  const { x, y } = stations.stations[id];

  const motionX = useMotionValue(x);
  const motionY = useMotionValue(y);

  return (
    <motion.div
      initial={{ x, y }}
      style={{ x: motionX, y: motionY, translateX: "-50%", translateY: "-50%" }}
      className="absolute w-6 h-6 bg-slate-950 rounded-full z-50 shadow-lg"
    ></motion.div>
  );
}
