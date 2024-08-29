import { useEffect } from "react";

import Track from "./Track";
import Station from "./Station";

import Train from "./Train";
import useTrain from "./useTrain";

export default function Map() {
  const { map, scope, trainX, trainY, trainYaw, driveToStation, trainStationId } = useTrain();

  useEffect(() => {
    const interval = setInterval(() => {
      driveToStation((trainStationId + 1) % map.stations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [driveToStation, map.stations.length, trainStationId]);

  return (
    <>
      <div className="relative w-[60%] bg-[#ddd]">
        <Train ref={scope} x={trainX} y={trainY} yaw={trainYaw} />
        {map.stations.map(({ x, y }, index) => (
          <Station key={`${index}-${x}-${y}`} id={index} stations={map} />
        ))}
        {map.connections.map(([from, to], index) => (
          <Track key={index} stations={map} from={from} to={to} />
        ))}
      </div>
    </>
  );
}
