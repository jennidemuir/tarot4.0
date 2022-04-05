import React, { Component } from "react";
import TarotCardReader from '../../components/TarotCardReader/TarotCardReader';
import TarotCardPicker from "../../components/TarotCardPicker/TarotCardPicker"
import tarotCards from '../../assets/tarotCardDB.json'

export class TarotReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: tarotCards,
        cards: [],
        clicked: false,
        cardShort: "",
        cardLong: "",
        cardTitle: "",
        cardMeaning: "",
        image: "",
        nums: new Set(),
        backgroundColor: "white",
        read:false
    };
  }

//Randomizes the cards on display in CardPicker
  componentDidMount() {
    while (this.state.nums.size !== 77) {
      this.setState({
        nums: this.state.nums.add(Math.floor(Math.random() * 77) + 1),
      });
    }
    this.setState({
      nums: [...this.state.nums],
    });
    }

// function for CardPicker to select 5 cards for reading
  handleCardClick = (e) => {
    const data = this.state.data;
    let num = this.state.nums.pop();
    let card = data.find((el) => el.id - 1 === num);

    if (this.state.cards.length <= 4 && e.target.checked === false) {
      e.target.src = card.img;
      e.target.checked = true;
      this.setState({ cards: [...this.state.cards, card] });
    }
  };

// function for CardReader to reveal the 5 cards info individually
  handleClickReveal = (e) => {
    const cardone = this.state.cards[0],
      cardtwo = this.state.cards[1],
      cardthree = this.state.cards[2],
      cardfour = this.state.cards[3],
      cardfive = this.state.cards[4];

    e.target.active = !e.target.active;

    if (e.target.active) {

      if (e.target.id === "cardone") {
        this.setState({
          cardShort: cardone.shortDescription,
          cardLong: cardone.longDescription,
          cardTitle: cardone.title,
          cardMeaning:
            "This first position represents You, the Quarent, and your current situation",
          image: cardone.img,
          read: true
        });
        e.target.src = cardone.img;
      } else if (e.target.id === "cardtwo") {
        this.setState({
          cardShort: cardtwo.shortDescription,
          cardLong: cardtwo.longDescription,
          cardTitle: cardtwo.title,
          cardMeaning:
            "The second card in this reading represents the path you are on",
          image: cardtwo.img,
        });
        e.target.src = cardtwo.img;
      } else if (e.target.id === "cardthree") {
        this.setState({
          cardShort: cardthree.shortDescription,
          cardLong: cardthree.longDescription,
          cardTitle: cardthree.title,
          cardMeaning:
            "The third card in this reading signifies obstacles that you will face on your journey",
          image: cardthree.img,
        });
        e.target.src = cardthree.img;
      } else if (e.target.id === "cardfour") {
        this.setState({
          cardShort: cardfour.shortDescription,
          cardLong: cardfour.longDescription,
          cardTitle: cardfour.title,
          cardMeaning:
            "The fourth card represents what is helping you on current path",
          image: cardfour.img,
        });
        e.target.src = cardfour.img;
      } else if (e.target.id === "cardfive") {
        this.setState({
          cardShort: cardfive.shortDescription,
          cardLong: cardfive.longDescription,
          cardTitle: cardfive.title,
          cardMeaning:
            "The final card in this reading signifies how progress can be made to reach your goals",
          image: cardfive.img,
        });
        e.target.src = cardfive.img;
      }
      e.target.active = !e.target.active;
      this.setState({
        backgroundColor: "white",
      });
    }
  };

  handleBtnClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <div className="tarotReadingMain">
        {this.state.clicked ? (
          <TarotCardReader
            cards={this.state.cards}
            bgColor={this.state.backgroundColor}
            cardShort={this.state.cardShort}
            cardLong={this.state.cardLong}
            cardTitle={this.state.cardTitle}
            cardMeaning={this.state.cardMeaning}
            image={this.state.image}
            handleClickReveal={this.handleClickReveal}
            handleBtnClick={this.handleBtnClick}
            read={this.state.read}
          />
        ) : (
          <TarotCardPicker
            cards={this.state.cards}
            handleCardClick={this.handleCardClick}
            handleBtnClick={this.handleBtnClick}
          />


        )}
      </div>
    );
  }
}

export default TarotReading;


