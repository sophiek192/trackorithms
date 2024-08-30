import { createContext, useCallback, useState } from "react";
import { MapType } from "../../types/MapType";
import { MotionValue, useAnimate, useMotionValue, useSpring } from "framer-motion";
import LEVEL1 from "./levels/level1";

type TrainContextType = {
  map: MapType;
  setMap: React.Dispatch<React.SetStateAction<MapType>>;
  resetMap: (newMap: MapType) => void;
  scope: React.RefObject<HTMLDivElement>;
  trainX: MotionValue<number>;
  trainY: MotionValue<number>;
  trainYaw: MotionValue<number>;
  trainStationId: number;
  setTrainStationId: React.Dispatch<React.SetStateAction<number>>;
  trainDrive: (destination: { x: number; y: number }) => Promise<void>;
  trainDriveBackwards: (destination: { x: number; y: number }) => Promise<void>;
  driveToStation: (stationId: number) => Promise<void>;
  driveToStationCb: (newStationId: (oldStationId: number) => number) => Promise<void>;
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

  const driveToStation = useCallback(
    async (stationId: number) => {
      setTrainStationId(stationId);
      await trainDrive(map.stations[stationId]);
    },
    [map.stations, trainDrive]
  );

  const driveToStationCb = useCallback(
    async (newStationId: (oldStationId: number) => number) => {
      const stationId = newStationId(trainStationId);
      await driveToStation(stationId);
    },
    [driveToStation, trainStationId]
  );

  const trainJump = useCallback(
    (destination: { x: number; y: number }) => {
      trainX.jump(destination.x);
      trainY.jump(destination.y);
    },
    [trainX, trainY]
  );

  const jumpToStation = useCallback(
    (id: number) => {
      setTrainStationId(id);
      trainJump(map.stations[id]);
    },
    [map.stations, trainJump]
  );

  const cancelAllAnimations = useCallback(() => {
    trainX.stop();
    trainY.stop();
    trainYaw.stop();
  }, [trainX, trainY, trainYaw]);

  const resetMap = useCallback(
    (newMap: MapType) => {
      cancelAllAnimations();
      setMap(newMap);
      trainJump(newMap.stations[0]);
    },
    [cancelAllAnimations, trainJump]
  );

  return (
    <TrainContext.Provider
      value={{
        map,
        setMap,
        resetMap,
        scope,
        trainX,
        trainY,
        trainYaw,
        trainStationId,
        setTrainStationId,
        trainDrive,
        trainDriveBackwards,
        driveToStation,
        driveToStationCb,
        trainJump,
        jumpToStation,
        cancelAllAnimations,
      }}
    >
      {children}
    </TrainContext.Provider>
  );
}
