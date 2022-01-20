import React from 'react';
import { AiFillHeart } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="card">
      <img
        className="cardimage"
        src={
          'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg'
        }
      />
      <div className="cardText">
        <h3>Our Changing Planet</h3>
        <h4>by Kurt Wagner</h4>
        <p>
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </p>
      </div>
      <div className="card_bottom">
        <span>Read</span>
        <span>Bookmark</span>
        <span>
          {/* <AiFillHeart /> */}
        </span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Cards;
