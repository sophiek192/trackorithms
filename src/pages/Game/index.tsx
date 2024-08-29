import CodeEditor from "./CodeEditor";
import Map from "./Map";

export default function Game() {
  return (
    <div className="w-full h-screen flex flex-row">
      <Map />
      <CodeEditor />
    </div>
  );
}
