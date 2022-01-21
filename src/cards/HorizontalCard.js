import React from "react";
import { MdMoreVert, MdShare, MdOutlineFavorite } from "react-icons/md";
import "./cards.css";

export default function HorizontalCard() {
  return (
    <div className="card_horizontal_parent">
      <div className="card_horizontal">
        <img
          className="card_Image_horizontal"
          src={
            "https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
          }
          alt="town"
        />

        <div className="card_Top">
          <div className="card_Text">
            <div className="card_Text-head">Our Changing Planet</div>
            <div className="card_Text-Subhead">by Kurt Wagner</div>
          </div>
        </div>
      </div>
      <div className="card_Bottom">
        <div className="card_Text-Bottom">
          <div className="card_Bottom-Buttons">READ</div>
          <div className="card_Bottom-Buttons">BOOKMARK</div>
        </div>
        <div className="card_Text-Bottom">
          <span className="card_Icons">
            <MdOutlineFavorite />
          </span>
          <span className="card_Icons">
            <MdShare />
          </span>
          <span className="card_Icons">
            <MdMoreVert />
          </span>
        </div>
      </div>
    </div>
  );
}
