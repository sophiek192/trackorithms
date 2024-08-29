import { useCallback, useEffect, useState } from "react";
import { MapType } from "../../types/MapType";
import { useAnimate, useMotionValue, useSpring } from "framer-motion";

export default function useTrain(initialMap: MapType) {
  // map
  const [map, setMap] = useState<MapType>(initialMap);

  // for animating the train
  const [scope, animate] = useAnimate();

  const [trainStationId, setTrainStationId] = useState<number>(0);

  const trainX = useSpring(map.stations[0].x, { damping: 100, stiffness: 150 });
  const trainY = useSpring(map.stations[0].y, { damping: 100, stiffness: 150 });
  const trainYaw = useMotionValue(0);

  // drive the train to a destination
  const trainDrive = useCallback(
    async (destination: { x: number; y: number }) => {
      const angle =
        (Math.atan2(destination.y - trainY.get(), destination.x - trainX.get()) * (180 / Math.PI)) %
        180;

      await animate(trainYaw, angle >= 0 ? angle : angle + 180);
      animate(trainX, destination.x);
      animate(trainY, destination.y);
    },
    [animate, trainX, trainY, trainYaw]
  );

  useEffect(() => {
    // when trainStationId changes, move the train to the new station
    trainDrive(map.stations[trainStationId]);
  }, [map.stations, trainDrive, trainStationId]);

  return {
    map,
    setMap,
    scope,
    trainX,
    trainY,
    trainYaw,
    trainStationId,
    setTrainStationId,
    trainDrive,
  };
}
