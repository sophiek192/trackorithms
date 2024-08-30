import { useCallback, useEffect } from "react";

import Track from "./Track";
import Station from "./Station";

import Train from "./Train";
import useTrain from "./useTrain";
import { wait } from "../../utils";

const INSTRUCTIONS = [
  { instruction: "driveToStation", params: { stationId: 1 } },
  { instruction: "driveToStation", params: { stationId: 2 } },
  { instruction: "driveToStation", params: { stationId: 0 } },
];

export default function Map() {
  const { map, scope, trainX, trainY, trainYaw, driveToStation } = useTrain();

  const executeInstructions = useCallback(async () => {
    while (true) {
      for (const { instruction, params } of INSTRUCTIONS) {
        if (instruction === "driveToStation") {
          await driveToStation(params.stationId);
          await wait(4500);
        }
      }
    }
  }, [driveToStation]);

  useEffect(() => {
    executeInstructions();
  }, [executeInstructions]);

  return (
    <>
      <div className="relative w-full bg-[#fafafa]">
        <Train ref={scope} x={trainX} y={trainY} yaw={trainYaw} />
        {map.stations.map(({ x, y }, index) => (
          <Station key={`${index}-${x}-${y}`} id={index} stations={map} />
        ))}
        <div>
          {map.connections.map(([from, to], index) => (
            <Track key={index} stations={map} from={from} to={to} />
          ))}
        </div>
      </div>
    </>
  );
}
