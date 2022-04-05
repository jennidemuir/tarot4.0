import React from 'react'

const TarotSpread = ({  cards,
  cardMeaning,
  cardTitle,
  cardShort,
  cardLong,
  img,
  handleClickReveal,
  bgColor,
  read}) => {
    const image = "https://i.pinimg.com/originals/8f/da/32/8fda32666e7f8f4e2a41fe0ec16537d4.webp";
    
  return (
      <div>
    <div className="pickedMain">
        <p className="readingEl" id="cardMeaning">
          {cardMeaning}
        </p>
        <div className="pickedContainer">
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardone"
            onClick={handleClickReveal}
            active="false"
            alt="card one"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardtwo"
            onClick={handleClickReveal}
            active="false"
            alt="card two"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardthree"
            onClick={handleClickReveal}
            active="false"
            alt="card three"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardfour"
            onClick={handleClickReveal}
            active="false"
            alt="card four"
          ></img>
          <img
            style={{ bgColor }}
            src={image}
            className="pickedImage"
            id="cardfive"
            onClick={handleClickReveal}
            active="false"
            alt="card five"
          ></img>
        </div>

        {/* <div className="image" onClick={this.handleClickReveal} id='center'></div> */}
      </div>

      <div className="readingContainer">
        <img alt="" id="activeImg" src={img} />
        <div className="reading">
          <p className="readingEl" id="cardTitle">
            {cardTitle}
          </p>
          {/* <img className="stateImg" src={img} /> */}

          <p className="readingEl" id="cardShort">
            {cardShort}
          </p>
          <p className="readingEl" id="cardLong">
            {cardLong}
          </p>
        </div>
      </div>
  </div>
  )
}

export default TarotSpread