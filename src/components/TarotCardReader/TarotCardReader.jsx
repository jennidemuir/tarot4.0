import React, { useState ,useEffect } from "react";
import "./tarotcardreader-styles.css";
import { useAuth } from "../../context/AuthContext";
import { useHistory} from "react-router-dom";
import { tarotCardCollectionRef } from "../../utils/firestore.collections";
import { addDoc } from "firebase/firestore";
import Modal from "../Modal/Modal";
import useMounted from "../../hooks/useMounted";
import TarotSpread from "../TarotSpread/TarotSpread";
import NoteForm from "../NoteForm/NoteForm";


const TarotCardReader = ({
  cards,
  cardMeaning,
  cardTitle,
  cardShort,
  cardLong,
  handleClickReveal,
  bgColor,
  read,
  handleBtnClick,
  image
}) => {
  const [showModal, setShowModal] = useState(false);
  const [header, setHeader] = useState('')
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const {currentUser} = useAuth()
  const history = useHistory()
  const mounted = useMounted();


 useEffect(() => {
   const randomNumber = (min, max) =>
     Math.floor(Math.random() * (max - min + 1) + min);
   const randomByte = () => randomNumber(0, 255);
   const randomCssRgba = () =>
     setColor(
       `rgba(${[randomByte(), randomByte(), randomByte(), 0.5].join(",")})`
     );
   return randomCssRgba();
 }, [setColor]);

  const openModal = () => {
    // randomCssRgba()
    setShowModal(true);
  }

  const saveCards = async (e) => {

    addDoc(tarotCardCollectionRef, { ...cards, header: header, note: note, userId: currentUser.uid })
      .then((res) => {

        history.push("/profile");

      })
      .catch((err) => err.message)
      .finally(() => {mounted.current && setShowModal(false);})

  }

  return (
    <div className="cardReaderMain">
      <div className="reader-btns">
        <div className="btn-container">
          
          <button
            className="reader-btn"
            type="button"
            id="newReadingBtn"
            onClick={() => window.location.reload()}
          >
            New Reading
          </button>
        </div>

        {currentUser && (
          <div className="save-btn-container">
            <button
              className="reader-btn"
              type="button"
              id="saveReadingBtn"
              disabled={!read}
              onClick={() => {
                openModal();
                // history.push("/protected-page");
              }}
            >
              Save Reading
            </button>
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              color={color}
            >
              <NoteForm header={header} setHeader={setHeader} note={note} setNote={setNote} saveCards={saveCards}/>
            </Modal>
          </div>
        )}
      </div>
      <TarotSpread
        cards={cards}
        bgColor={bgColor}
        cardShort={cardShort}
        cardLong={cardLong}
        cardTitle={cardTitle}
        cardMeaning={cardMeaning}
        img={image}
        handleClickReveal={handleClickReveal}
        newReadingClick={handleBtnClick}
        read={read}
      />
    </div>
  );
};

export default TarotCardReader;
