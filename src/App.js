import React from "react";
import "./style.css";
import Cards from "../src/cards/Card";
import Chips from "./Chips/Chips";
export default function App() {
  let compArr = [
    "Card",
    "Chips",
    "Drawer",
    "Header",
    "Badge",
    "Snackbar",
    "Dialogs",
    "Tabs"
  ];
  const [currentComp, setCurrentComp] = React.useState(compArr[0]);

  return (
    <div className="App">
      <select
        className="select"
        onChange={(e) => {
          setCurrentComp(e.target.value);
        }}
      >
        {compArr.map((comp) => (
          <option key={comp} value={comp}>
            {comp}
          </option>
        ))}
      </select>
      {currentComp === "Card" && <Cards />}
      {currentComp === "Chips" && <Chips />}
      {/* {currentComp === 'card' ? <Cards /> : null}
      {currentComp === 'card' ? <Cards /> : null}
      {currentComp === 'card' ? <Cards /> : null} */}
    </div>
  );
}
