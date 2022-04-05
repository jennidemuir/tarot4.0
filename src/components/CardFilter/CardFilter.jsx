import React from "react";
import "./card-filter-styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFilter =  ({ handleClick }) => {
  return (
    <div className="cardFilterMain">
      
      <div
        onClick={handleClick}
        id="MajorArcana"
        className="cardFilterContainer"
      >
        Major Arcana
        <div className="cardFilterBackground" id="arcana"></div>
      </div>

      <div onClick={handleClick} id="Cups" className="cardFilterContainer">
        Cups
        <div className="cardFilterBackground" id="cup"></div>
      </div>

      <div onClick={handleClick} id="Swords" className="cardFilterContainer">
        Swords
        <div className="cardFilterBackground" id="sword"></div>
      </div>

      <div onClick={handleClick} id="Wands" className="cardFilterContainer">
        Wands
        <div className="cardFilterBackground" id="wand"></div>
      </div>

      <div onClick={handleClick} id="Pentacles" className="cardFilterContainer">
        Pentacles
        <div className="cardFilterBackground" id="pentacle"></div>
      </div>

      <div onClick={handleClick} id="Reset" className="cardFilterContainer">
        View All
        <div className="cardFilterBackground" id="all"></div>
      </div>


    </div>
  );
}

export default CardFilter