import { useEffect, useState } from "react";

import LEVEL1 from "./level1";
import Track from "./Track";
import Station from "./Station";

import type { MapType } from "../../types/MapType";
import Train from "./Train";
import { useAnimate, useMotionValue, useSpring } from "framer-motion";

/*
const trainDrive = async ({
  trainX,
  trainY,
  destination,
  trainYaw,
}: {
  trainX: MotionValue<number>;
  trainY: MotionValue<number>;
  trainYaw: MotionValue<number>;
  destination: { x: number; y: number };
}) => {
  const [currentX, currentY] = [trainX.get(), trainY.get()];

  const angle =
    (Math.atan2(destination.y - currentY, destination.x - currentX) * (180 / Math.PI)) % 180;

  trainYaw.set(angle >= 0 ? angle : angle + 180);

  console.log(angle);
  console.log(angle % 180);

  trainX.set(destination.x);
  trainY.set(destination.y);
};
*/

export default function Map() {
  // for animating the train
  const [scope, animate] = useAnimate();

  const [map] = useState<MapType>(LEVEL1);

  const [trainStationId, setTrainStationId] = useState<number>(0);

  const trainX = useSpring(map.stations[0].x, { damping: 100, stiffness: 150 });
  const trainY = useSpring(map.stations[0].y, { damping: 100, stiffness: 150 });
  //   const trainYaw = useSpring(0, { damping: 100, stiffness: 500 });
  const trainYaw = useMotionValue(0);

  useEffect(() => {
    // when trainStationId changes, move the train to the new station
    const destination = map.stations[trainStationId];
    const angle =
      (Math.atan2(destination.y - trainY.get(), destination.x - trainX.get()) * (180 / Math.PI)) %
      180;

    const trainDrive = async () => {
      await animate(trainYaw, angle >= 0 ? angle : angle + 180);
      animate(trainX, destination.x);
      animate(trainY, destination.y);
    };

    trainDrive();

    // trainYaw.set(angle >= 0 ? angle : angle + 180);

    // trainX.set(map.stations[trainStationId].x);
    // trainY.set(map.stations[trainStationId].y);
  }, [animate, map.stations, trainStationId, trainX, trainY, trainYaw]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainStationId((prev) => (prev + 1) % map.stations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [map.stations.length]);

  return (
    <div className="relative w-[60%] bg-[#ddd]">
      <Train ref={scope} x={trainX} y={trainY} yaw={trainYaw} />
      {map.stations.map((_, index) => (
        <Station key={index} id={index} stations={map} />
      ))}
      {map.connections.map(([from, to], index) => (
        <Track key={index} stations={map} from={from} to={to} />
      ))}
    </div>
  );
}
