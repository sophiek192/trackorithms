import { createContext, useCallback, useEffect, useState } from "react";
import { MapType } from "../../types/MapType";
import { MotionValue, useAnimate, useMotionValue, useSpring } from "framer-motion";
import LEVEL1 from "./levels/level1";

type TrainContextType = {
  map: MapType;
  setMap: React.Dispatch<React.SetStateAction<MapType>>;
  scope: React.RefObject<HTMLDivElement>;
  trainX: MotionValue<number>;
  trainY: MotionValue<number>;
  trainYaw: MotionValue<number>;
  trainStationId: number;
  setTrainStationId: React.Dispatch<React.SetStateAction<number>>;
  trainDrive: (destination: { x: number; y: number }) => Promise<void>;
  trainDriveBackwards: (destination: { x: number; y: number }) => Promise<void>;
  trainJump: (destination: { x: number; y: number }) => void;
  jumpToStation: (id: number) => void;
  cancelAllAnimations: () => void;
};

export const TrainContext = createContext<TrainContextType | null>(null);

export default function TrainContextProvider({ children }: { children: React.ReactNode }) {
  // map
  const [map, setMap] = useState<MapType>(LEVEL1);

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
        360;

      await animate(trainYaw, angle >= 0 ? angle : angle + 360);
      animate(trainX, destination.x);
      animate(trainY, destination.y);
    },
    [animate, trainX, trainY, trainYaw]
  );

  const trainDriveBackwards = useCallback(
    async (destination: { x: number; y: number }) => {
      const angle =
        (Math.atan2(destination.y - trainY.get(), destination.x - trainX.get()) * (180 / Math.PI) +
          180) %
        360;

      await animate(trainYaw, angle >= 0 ? angle : angle + 360);
      animate(trainX, destination.x);
      animate(trainY, destination.y);
    },
    [animate, trainX, trainY, trainYaw]
  );

  useEffect(() => {
    // when trainStationId changes, move the train to the new station
    trainDrive(map.stations[trainStationId]);
  }, [map.stations, trainDrive, trainStationId]);

  const trainJump = useCallback(
    (destination: { x: number; y: number }) => {
      trainX.jump(destination.x);
      trainY.jump(destination.y);
    },
    [trainX, trainY]
  );

  const jumpToStation = useCallback(
    (id: number) => {
      trainJump(map.stations[id]);
    },
    [map.stations, trainJump]
  );

  const cancelAllAnimations = useCallback(() => {
    trainX.stop();
    trainY.stop();
    trainYaw.stop();
  }, [trainX, trainY, trainYaw]);

  return (
    <TrainContext.Provider
      value={{
        map,
        setMap,
        scope,
        trainX,
        trainY,
        trainYaw,
        trainStationId,
        setTrainStationId,
        trainDrive,
        trainDriveBackwards,
        trainJump,
        jumpToStation,
        cancelAllAnimations,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
}
