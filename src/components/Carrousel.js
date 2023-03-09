import "../styles/carrousel.scss";
import React, { useState } from "react";
import PropTypes from "prop-types";
import leftArrow from "../assets/left_arrow.png";
import rightArrow from "../assets/right_arrow.png";

function Carroussel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clickHandler = (next) => (e) => {
    e.preventDefault();
    console.log("click isNext", next);
    if (next) {
      if (pictures[currentIndex + 1]) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
      }
    }
  };

  return (
    <div className="carrousel">
      <div className="carrousel_pictures">
        <img src={pictures[currentIndex]} alt="House's pictures" />
        <span className="current_picture">
          {currentIndex + 1} / {pictures.length}
        </span>
      </div>
      {pictures.length > 1 && (
        <img
          className="carrousel_leftarrow"
          src={leftArrow}
          alt="previous pictures"
          onClick={clickHandler(false)}
        />
      )}
      {pictures.length > 1 && (
        <img
          className="carrousel_rightarrow"
          src={rightArrow}
          alt="next pictures"
          onClick={clickHandler(true)}
        />
      )}
    </div>
  );
}

Carroussel.propTypes = {
  pictures: PropTypes.array.isRequired,
};

export default Carroussel;
