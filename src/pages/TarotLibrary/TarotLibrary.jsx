import React, { useEffect, useState } from "react";
import CardFilter from "../../components/CardFilter/CardFilter";
import tarotCards from "../../assets/tarotCardDB.json";
import { TarotCardContainer } from "../../components/TarotCardContainer/TarotCardContainer";
import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { Card } from "../../components/Card";

const TarotLibrary = () => {
  const [suit, setFilterSuit] = useState(tarotCards);
  const [search, setSearch] = useState("");

  const handleClick = (e) => {
    if (e.target.id === "Reset") {
      setFilterSuit(tarotCards);
    } else {
      let updatedSuit = tarotCards.filter((data) => data.type === e.target.id);
      setFilterSuit(updatedSuit);
    }
  };

  const handleOnChange = (e) => {
    setSearch(e.target.value)
       const filteredCards = tarotCards.filter((card) =>
         card.title.toLowerCase().includes(search.toLowerCase())
       );
       setFilterSuit(filteredCards)
  }



  return (
    <div className="tarotLibraryMain">
      <CardFilter Data={suit} handleClick={handleClick} />
      <Card maxW="sm" mx="auto" py="2">
        <FormControl width="300px" id="name">
          <FormLabel fontFamily='sm'>Search by card name</FormLabel>
          <Input
            value={search}
            onChange={(e) => handleOnChange(e)}
            name="search"
            type="input"
            autoComplete="search"
          />
        </FormControl>
      </Card>
      <TarotCardContainer Data={suit} />
    </div>
  );
};

export default TarotLibrary;
