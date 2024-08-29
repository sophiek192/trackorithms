import { motion, useMotionValue } from "framer-motion";
import { MapType } from "../../types/MapType";

export default function Station({ id, stations }: { id: number; stations: MapType }) {
  const { x, y } = stations.stations[id];
  const name = stations.stations[id].name;

  const motionX = useMotionValue(x);
  const motionY = useMotionValue(y);

  return (
    <motion.div
      initial={{ x, y }}
      style={{ x: motionX, y: motionY, translateX: "-50%", translateY: "-50%" }}
      className="absolute w-6 h-6 z-50 flex justify-center items-center"
    >
      <p className=" text-white font-light text-xs px-2 py-1 bg-slate-950 border border-white rounded-r-md z-50 shadow-lg">
        {id}
      </p>
      <p className="text-white absolute top-1/2 left-0.5 text-nowrap bg-slate-950/70 -translate-y-1/2 -translate-x-full px-2 py-1 rounded-l-md text-xs border border-white border-r-0">
        {name}
      </p>
    </motion.div>
  );
}
