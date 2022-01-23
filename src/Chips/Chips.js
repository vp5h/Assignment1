import { useState } from "react";
import ChipsWithInput from "./ChipWithInput";
let AllChips = ["ChipsWithInput"];

export default function Chips() {
  const [CurrentChip, setCurrentChip] = useState("ChipsWithInput");

  return (
    <>
      <select
        className="select"
        onChange={(e) => {
          setCurrentChip(e.target.value);
        }}
      >
        {AllChips.map((comp) => (
          <option key={comp} value={comp}>
            {comp}
          </option>
        ))}
      </select>
      <div style={{ marginTop: "2rem" }}>
        {CurrentChip === "ChipsWithInput" && <ChipsWithInput />}
      </div>
    </>
  );
}
