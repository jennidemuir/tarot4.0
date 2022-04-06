import { createPortal } from "react-dom";
import React, { useRef, useEffect, useCallback, useState } from "react";
import styled from 'styled-components';
import "./Modal.css";

const Modal = ({ showModal, setShowModal, children, color}) => {

  // const modalRef = useRef();

  // const closeModal = (e) => {
  //setShowModal(false)
  //   }
  // };

  // const keyPress = useCallback(
  //   (e) => {
  //     if (e.key === "Escape" && showModal) {
  //       setShowModal(false);
  //
  //     }
  //   },
  //   [setShowModal, showModal]
  // );

  const closeModalXClick = () => {
       setShowModal(false);

  }

  // useEffect(() => {
  //   document.addEventListener("keydown", keyPress);
  //   return () => document.removeEventListener("keydown", keyPress);
  // }, [keyPress]);


  if (!showModal) {
    return null;
  }

  const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: ${color };
  `;

  return createPortal(
    <div>
      <Overlay  className="overlay"></Overlay>
      <div className="modal">
        <div>
          <span
            className="close-button"
            onClick={closeModalXClick}
          >
            X
          </span>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
