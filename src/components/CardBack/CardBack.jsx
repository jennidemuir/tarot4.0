import React from "react";
import "./cardback-styles.css";

function CardBack({ handleCardClick }) {
  // return (
  //   <div className="cardContainer">
  //     <img
  //       className="cardBackImg"
  //       src="https://i.pinimg.com/originals/8f/da/32/8fda32666e7f8f4e2a41fe0ec16537d4.webp"
  //     />
  //   </div>
  // );
  let cardArray = [];

  for (let i = 1; i < 78; i++) {
    cardArray[i] = (
      <img
        className="cardImg"
        alt=""
        id={i}
        key={i}
        checked={false}
        onClick={handleCardClick}
        src="https://i.pinimg.com/originals/8f/da/32/8fda32666e7f8f4e2a41fe0ec16537d4.webp"
      />
    );
  }

  return (
    // <div className="cardDeck">
    <div className="cardbackContainer">
      {cardArray.map((card , i) => (
        <div key={i} className="cardback">{card}</div>
      ))}
    </div>
    // </div>
  );
}

export default CardBack;
