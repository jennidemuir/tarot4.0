import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Layout } from "../../components/Layout";
import Navlink from "../../components/Navlink";
import { Link, useHistory} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Image from "../../assets/tarot.png";
import "./homepage-styles.css";

export default function Homepage() {
  const { currentUser } = useAuth();
  const history = useHistory()
  return (
    <Layout>
      <div className="homepage">
        {currentUser && <Heading>Welcome {currentUser.displayName}</Heading>}
        <img onClick={()=>{history.push('/tarot-reading')}} className="home-image" src={Image} alt="crystal ball" />
        <div className="home-text">
          {!currentUser && (
            <div>
              <div>
                <p>
                  <Link to="register">Sign Up </Link>to Save Your Readings
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
