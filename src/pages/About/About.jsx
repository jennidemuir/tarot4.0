import React from "react";
import "./about-styles.css";
import HeadShot from "../../assets/headshot1.jpg";
import AnimalSite from "../../assets/animalSite.png";
import FEMentor from "../../assets/FEMentor.png";
import Magic8Ball from "../../assets/magicball.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <img className="headShot" src={HeadShot} alt="headshot of Jennifer" />
      <div className="aboutBio">
        <p>Hi, my name is</p>
        <h1>Jennifer DeMuir</h1>
        <p>And I've been learning web development since January 2020.</p>
        <p>Have a look at some of my other projects!</p>
      </div>
      <div className="aboutLinks">
        <div className="aboutImgContainer">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://jennidemuir.github.io/Magic-Eight-Ball/"
          >
            <img
              className="aboutImg"
              src={Magic8Ball}
              alt="magica 8 ball site"
            />
            <p>Magic 8 Ball - built with pure JavaScript, CSS and HTML</p>
          </a>
        </div>
        <div className="aboutImgContainer">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://jennidemuir.github.io/jennifer_nicolella2022/"
          >
            <img
              className="aboutImg"
              src={AnimalSite}
              alt="animal communicator site"
            />
            <p>Buisiness Website for Animal Communicator Jennifer Nicolella</p>
            <p>Built using React and Styled Components</p>
          </a>
        </div>
        <div className="aboutImgContainer">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.frontendmentor.io/profile/jennidemuir"
          >
            <img
              className="aboutImg"
              src={FEMentor}
              alt="frontend mentor profile"
            />
            <p>A collections of projects from FrontEndMentor.io</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
