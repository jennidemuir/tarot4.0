import { Heading, Container, Badge } from '@chakra-ui/react'
import React, {useState} from 'react'
import { Layout } from '../components/Layout'
import Navlink from '../components/Navlink';
import TarotSpread from '../components/TarotSpread/TarotSpread'

export default function ProtectedPage({setViewClick, cards}) {
  const [cardShort, setCardShort] = useState("");
  const [cardLong, setCardLong] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [cardMeaning, setCardMeaning] = useState("");
  const [image, setImage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [read, setRead] = useState(false);


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


  return (
    <Layout>
      <div className="btn-container">
        <button
          className="reader-btn"
          type="button"
          id="newReadingBtn"
          onClick={() => setViewClick(false)}
        >
          back
        </button>
      </div>
      <TarotSpread
        cards={cards}
        bgColor={backgroundColor}
        cardShort={cardShort}
        cardLong={cardLong}
        cardTitle={cardTitle}
        cardMeaning={cardMeaning}
        img={image}
        handleClickReveal={handleClickReveal}

        read={read}
      />
    </Layout>
  );
}
