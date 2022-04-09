import React from 'react'
import './footer-styles.css'
import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Navlink from "../Navlink";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import footerImg from "../../assets/crystal_ball.png"

const Footer = () => {
  const history = useHistory()
  return (
    <Box
      className="footerContainer"
      borderTop="2px"
      borderTopColor={useColorModeValue("gray.100", "gray.700")}
    >
      <HStack py={4} justifyContent="flex-end">
        <div
          className="learnMore"
          onClick={() => {
            history.push("/about");
          }}
        >
          <img className="footerImg" src={footerImg} alt="tarot card" />
          <div>
            <h2>Learn More</h2>
            <p className="smallText">about the creator of this site</p>
          </div>
        </div>
        <Spacer />
        <IconContext.Provider value={{ className: "githubIcon", size: 28 }}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/jennidemuir/tarot4.0"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "linkedinIcon", size: 28 }}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jennifer-demuir-paquette-298002184/"
          >
            <FaLinkedin />
          </a>
        </IconContext.Provider>
      </HStack>
    </Box>
  );
}

export default Footer