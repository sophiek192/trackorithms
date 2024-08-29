import { useContext } from "react";
import { TrainContext } from "./trainContext";

export default function useTrain() {
  const context = useContext(TrainContext);
  if (!context) {
    throw new Error("useTrain must be used within a TrainContextProvider");
  }
  return context;
}
