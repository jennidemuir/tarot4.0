import React from "react";
import "./tarotcard-styles.css";

export const TarotCard = ({
  id,
  img,
  title,
  shortDescription,
  longDescription,
}) => {
  return (
    <div className="tarotCardMain" id={id}>
      <img src={img} />
      <h2>{title}</h2>
      <p>{shortDescription}</p>
      <p>{longDescription}</p>
    </div>
  );
};

export default TarotCard;
