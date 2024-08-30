import { motion, useMotionValue } from "framer-motion";
import { MapType } from "../../types/MapType";
import { Link } from "react-router-dom";

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
      <Link
        to="/"
        className="flex flex-row hover:scale-105 transition-all translate-x-[40%] shadow-2xl"
      >
        <p className=" text-white font-light px-4 py-2 bg-slate-950 border border-white rounded-l-md z-50 shadow-lg">
          {id}
        </p>
        <p className="text-white text-nowrap bg-slate-950/70 px-4 py-2 rounded-r-md border border-white border-l-0">
          {name}
        </p>
      </Link>
    </motion.div>
  );
}
