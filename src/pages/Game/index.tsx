import CodeEditor from "./CodeEditor";
import LevelSelector from "./LevelSelector";
import Map from "./Map";
import TrainContextProvider from "./trainContext";

export default function Game() {
  return (
    <TrainContextProvider>
      <div className="w-screen h-screen flex flex-row">
        <Map />
        <CodeEditor />
        <LevelSelector />
      </div>
    </TrainContextProvider>
  );
}
