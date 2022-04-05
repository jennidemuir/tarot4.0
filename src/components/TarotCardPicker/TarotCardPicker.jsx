import React from "react";
import CardBack from '../CardBack/CardBack'
import "./tarotcardpicker-styles.css";

const TarotCardPicker = ({ cards, handleCardClick, handleBtnClick }) => {
  return (
    <div className="tarotCardPicker">
      <h2 className="cardPickerTitle">
        Pick <span className="five">5</span> Cards
      </h2>
      {cards.length === 5 ? (
        <button className="pickerBtn" onClick={handleBtnClick}>
        Go To Reading
        </button>
      ) : null}


      <div className="picker">
        <CardBack handleCardClick={handleCardClick} />
      </div>
    </div>
  );
};

export default TarotCardPicker;
