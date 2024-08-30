import LEVEL1 from "./levels/level1";
import LEVEL2 from "./levels/level2";
import LEVEL3 from "./levels/level3";
import useTrain from "./useTrain";

const LEVELS = [
  { name: "Beginner", level: LEVEL1 },
  { name: "Intermediate", level: LEVEL2 },
  { name: "Advanced", level: LEVEL3 },
];

export default function LevelSelector() {
  const { resetMap } = useTrain();

  return (
    <div className="absolute top-0 left-0 p-4">
      <select
        className="p-2 bg-white rounded-md border border-gray-300"
        onChange={(e) => resetMap(LEVELS[parseInt(e.target.value)].level)}
      >
        {LEVELS.map(({ name }, index) => (
          <option key={name} value={index}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
