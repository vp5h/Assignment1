import React, { useState } from "react";
import BasicCard from "./BasicCard";
import CardWithImage from "./CardWithImage";
import CardWithHeader from "./CardWithHeader";
import CardonlyButtons from "./CardonlyButtons";
import CardonlyIcons from "./CardonlyIcons";
import HorizontalCard from "./HorizontalCard";

let CardArr = [
  "Basic",
  "Textover Media",
  "With Header",
  "Only Buttons",
  "Only Icons",
  "Horizontal"
];

const Cards = () => {
  const [currentCard, setCurentCard] = useState("Basic");

  return (
    <>
      <select
        className="select"
        onChange={(e) => {
          setCurentCard(e.target.value);
        }}
      >
        {CardArr.map((comp) => (
          <option key={comp} value={comp}>
            {comp}
          </option>
        ))}
      </select>
      <div style={{ marginTop: "2rem" }}>
        {currentCard === "Basic" && <BasicCard />}
        {currentCard === "Textover Media" && <CardWithImage />}
        {currentCard === "With Header" && <CardWithHeader />}
        {currentCard === "Only Buttons" && <CardonlyButtons />}
        {currentCard === "Only Icons" && <CardonlyIcons />}
        {currentCard === "Horizontal" && <HorizontalCard />}
      </div>
    </>
  );
};

export default Cards;
