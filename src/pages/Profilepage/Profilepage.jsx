import React, { useEffect, useState } from "react";
import "./profilepage-styles.css";
import { Layout } from "../../components/Layout";
import { Button } from "@chakra-ui/react";
import Modal from "../../components/Modal/Modal";
import NoteForm from "../../components/NoteForm/NoteForm";
import { useAuth } from "../../context/AuthContext";
import {
  query,
  where,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot
} from "firebase/firestore";
import { tarotCardCollectionRef } from "../../utils/firestore.collections";
import { db } from "../../utils/init-firebase";
import useMounted from "../../hooks/useMounted";
import ProtectedPage from "../ProtectedPage";

export default function Profilepage() {
  const [collections, setCollections] = useState([]);
  const [cards, setCards] = useState({})
  const [viewClick, setViewClick] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [header, setHeader] = useState("");
  const [note, setNote] = useState("");
  const [color, setColor] = useState("");
  const { currentUser } = useAuth();
  const mounted = useMounted();

  // useEffect(() => {
  //   const getCollections = async () => {
  //     const q = query(
  //       tarotCardCollectionRef,
  //       where("userId", "==", currentUser.uid)
  //     );
  //     await getDocs(q).then((res) => {
  //       const docs = res.docs.map((doc) => ({
  //         data: doc.data(),
  //         id: doc.id,
  //       }));

  //       setCollections(docs);
  //     });
  //   };
  //   getCollections();
  // }, [currentUser.uid]);

  useEffect(() => {
    const q = query(
      tarotCardCollectionRef,
      where("userId", "==", currentUser.uid)
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      }));
      setCollections(docs);
    });

    return () => {
      unsubscribe()
    }
  }, [currentUser.uid]);

  useEffect(() => {
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    const randomByte = () => randomNumber(0, 255);
    const randomCssRgba = () =>
      setColor(
        `rgba(${[randomByte(), randomByte(), randomByte(), 0.7].join(",")})`
      );
    return randomCssRgba();
  }, [setColor]);

  const openModal = () => {
    // randomCssRgba()
    console.log({ collections });
    setShowModal(true);
  };

  const viewCollection = (collection) => {
    setCards(collection);
    setViewClick(true)
  };

  const saveUpdate = (collection) => {
    const id = collection.id;
    const docRef = doc(db, "tarot-card", id);
    updateDoc(docRef, { "header": header, note: note })
      .then((res) => {
        console.log(id);
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        mounted.current && setShowModal(false);
      });
  };

  const deleteCollection = (id) => {
    const docRef = doc(db, "tarot-card", id);
    deleteDoc(docRef)
      .then(() => "Document deleted")
      .catch((err) => err.message);
  };

  return (
    <div className='profileContainer'>
      {collections.length === 0 && (
        <p className="emptyCollections">
          Come back to view saved tarot readings
        </p>
      )}
      {viewClick ? (
        <ProtectedPage setViewClick={setViewClick} cards={cards} />
      ) : (
        <div>
          {collections.map((collection, i) => (
            <div
              className="dataContainer"
              id={collection.id}
              key={collection.id}
            >
              <div className="cardSpreadContainer">
                <Button
                  colorScheme={"purple"}
                  className="viewButton"
                  onClick={() => {
                    viewCollection(collection.data);
                  }}
                >
                  view
                </Button>
                {Object.keys(collection.data)
                  .slice(0, 5)
                  .map((c, i) => (
                    <div key={i} className="cardSpread">
                      <img
                        className="cardSpreadImg"
                        alt="collection"
                        src={collection.data[c].img}
                      />
                    </div>
                  ))}
              </div>
              <div className="noteContainer">
                <h2>{collection.data.header}:</h2>
                <p>{collection.data.note}</p>
              </div>
              <div className="editDeleteContainer">
                <Button
                  colorScheme={"purple"}
                  id={collection.data.id}
                  className="editButton"
                  onClick={() => {
                    setHeader(collection.data.header);
                    setNote(collection.data.note);
                    openModal();
                  }}
                >
                  edit
                </Button>
                <Button
                  colorScheme={"red"}
                  className="deleteButton"
                  onClick={() => deleteCollection(collection.id)}
                >
                  Delete
                </Button>
              </div>

              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                color={color}
              >
                <NoteForm
                  titlePlaceHolder={""}
                  notePlaceHolder={""}
                  header={header}
                  setHeader={setHeader}
                  note={note}
                  setNote={setNote}
                  saveCards={() => saveUpdate(collection)}
                  color={color}
                />
              </Modal>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
