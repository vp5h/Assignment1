import { useState } from "react";
import "./Chips.css";
import { ImCross } from "react-icons/im";

export default function ChipsWithInput() {
  let [ChipArr, setChipArr] = useState(["Lemon", "cinamon"]);

  function KeyHandler(e) {
    if (e.key === "Enter") {
      if (e.target.value.trim().length > 0)
        setChipArr([...ChipArr, e.target.value]);
    }
  }

  function RemoveChip(chip) {
    let filterChips = ChipArr.filter((eachChip) => eachChip !== chip);
    setChipArr(filterChips);
  }

  return (
    <>
      <div className="Chip_Component">
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
          onKeyUp={(e) => {
            KeyHandler(e);
          }}
        />
      </div>
    </>
  );
}
