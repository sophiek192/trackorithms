import { useEffect } from "react";

import LEVEL1 from "./level1";
import Track from "./Track";
import Station from "./Station";

import Train from "./Train";
import useTrain from "./useTrain";

export default function Map() {
  const { map, scope, trainX, trainY, trainYaw, setTrainStationId } = useTrain(LEVEL1);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrainStationId((prev) => (prev + 1) % map.stations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [map.stations.length, setTrainStationId]);

  return (
    <>
      <div className="relative w-[60%] bg-[#ddd]">
        <Train ref={scope} x={trainX} y={trainY} yaw={trainYaw} />
        {map.stations.map((_, index) => (
          <Station key={index} id={index} stations={map} />
        ))}
        {map.connections.map(([from, to], index) => (
          <Track key={index} stations={map} from={from} to={to} />
        ))}
      </div>
    </>
  );
}
