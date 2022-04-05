import React, { useState, useEffect } from "react";
import TarotCardReader from "../../components/TarotCardReader/TarotCardReader";
import TarotCardPicker from "../../components/TarotCardPicker/TarotCardPicker";
import tarotCards from "../../assets/tarotCardDB.json";

const TarotReading = () => {
  const allCards = tarotCards;
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [cardShort, setCardShort] = useState("");
  const [cardLong, setCardLong] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardMeaning, setCardMeaning] = useState("");
  const [image, setImage] = useState("");
  const [nums, setNums] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [read, setRead] = useState(false);

  //Randomizes the cards on display in CardPicker

  useEffect(() => {
    let newSet = new Set();
    while (newSet.size !== 77) {
      newSet.add(Math.floor(Math.random() * 77) + 1);
    }
    return setNums([...newSet]);
  }, [nums]);

  // function for CardPicker to select 5 cards for reading
  const handleCardClick = (e) => {
    let data = allCards;
    let num = nums.pop();
    let card = data.find((el) => el.id - 1 === num);

    if (cards.length <= 4 && e.target.checked === false) {
      e.target.src = card.img;
      e.target.checked = true;
      setCards([...cards, card]);
    }
  };

  // function for CardReader to reveal the 5 cards info individually
  const handleClickReveal = (e) => {
    const cardOne = cards[0],
      cardTwo = cards[1],
      cardThree = cards[2],
      cardFour = cards[3],
      cardFive = cards[4];

    e.target.active = !e.target.active;

    if (e.target.active) {
      if (e.target.id === "cardone") {
        setCardShort(cardOne.shortDescription);
        setCardLong(cardOne.longDescription);
        setCardTitle(cardOne.title);
        setCardMeaning(
          "The second card in this reading represents the path you are on"
        );
        setImage(cardOne.img);
        setRead(true);
        e.target.src = cardOne.img;
      } else if (e.target.id === "cardtwo") {
        setCardShort(cardTwo.shortDescription);
        setCardLong(cardTwo.longDescription);
        setCardTitle(cardTwo.title);
        setCardMeaning(
          "The second card in this reading represents the path you are on"
        );
        setImage(cardTwo.img);
        e.target.src = cardTwo.img;
      } else if (e.target.id === "cardthree") {
        setCardShort(cardThree.shortDescription);
        setCardLong(cardThree.longDescription);
        setCardTitle(cardThree.title);
        setCardMeaning(
          "The third card in this reading signifies obstacles that you will face on your journey"
        );
        setImage(cardThree.img);
        e.target.src = cardThree.img;
      } else if (e.target.id === "cardfour") {
        setCardShort(cardFour.shortDescription);
        setCardLong(cardFour.longDescription);
        setCardTitle(cardFour.title);
        setCardMeaning(
          "The fourth card represents what is helping you on current path"
        );
        setImage(cardFour.img);
        e.target.src = cardFour.img;
      } else if (e.target.id === "cardfive") {
        setCardShort(cardFive.shortDescription);
        setCardLong(cardFive.longDescription);
        setCardTitle(cardFive.title);
        setCardMeaning(
          "The final card in this reading signifies how progress can be made to reach your goals"
        );
        setImage(cardFive.img);
        e.target.src = cardFive.img;
      }
      e.target.active = !e.target.active;
      setBackgroundColor("white");
    }
  };

  const handleBtnClick = () => {
    setClicked(
       !clicked,
    );
  };

  return (
    <div className="tarotReadingMain">
      {clicked ? (
        <TarotCardReader
          cards={cards}
          bgColor={backgroundColor}
          cardShort={cardShort}
          cardLong={cardLong}
          cardTitle={cardTitle}
          cardMeaning={cardMeaning}
          image={image}
          handleClickReveal={handleClickReveal}
          handleBtnClick={handleBtnClick}
          read={read}
        />
      ) : (
        <TarotCardPicker
          cards={cards}
          handleCardClick={handleCardClick}
          handleBtnClick={handleBtnClick}
        />
      )}
    </div>
  );
};

export default TarotReading;
