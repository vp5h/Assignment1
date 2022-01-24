import { useState } from "react";
import "./Chips.css";
import { ImCross } from "react-icons/im";

export default function ChipsWithInput() {
  let [ChipArr, setChipArr] = useState(["Lemon", "cinamon"]);
  let [inputVal, setInputVal] = useState("");

  function KeyHandler(e) {
    if (e.key === "Enter") {
      if (e.target.value.trim().length > 0)
        setChipArr([...ChipArr, e.target.value]);
      setInputVal("");
    }
  }

  function RemoveChip(chip) {
    let filterChips = ChipArr.filter((eachChip) => eachChip !== chip);
    setChipArr(filterChips);
  }

  return (
    <>
      <div className="Chip_Component">
        <label for="Chip-Input" className="chips">
          <div className="allChips">
            {ChipArr.map((chip) => {
              return (
                <>
                  <span className="chip" key={chip}>
                    {chip}
                    <span
                      key={chip}
                      className="chipIcon"
                      onClick={() => RemoveChip(chip)}
                    >
                      <ImCross key={chip} />
                    </span>
                  </span>
                </>
              );
            })}
          </div>
          <input
            className="Chip-Input"
            type="text"
            placeholder="Anything"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            onKeyUp={(e) => {
              KeyHandler(e);
            }}
          />
        </label>
      </div>
    </>
  );
}
