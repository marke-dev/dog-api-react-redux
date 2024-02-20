/*
* DogSearch.js is a search component, using filter to search for dog breeds
* used in: BreedsContainer.js, BreedContainer.js,
* props: breeds (which includes subreeds)
*/


import React, { useState, useEffect } from "react";
import Dog from "./Dog";
import MainLayout from "./MainLayout";
import { Container } from "../styles/FlexBox";



const DogSearch = ({breeds}) => {
  const [filtered, setFiltered] = useState(breeds);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      const searched = breeds.filter((b) => {
        return b.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFiltered(searched);
    } else {
        setFiltered(breeds);
    }
  }, [breeds, searchInput]);


  return (
    <MainLayout>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <Container center>
        {filtered.map((b, i) => {
          return <Dog breed={b} key={i} />;
        })}
      </Container>
    </MainLayout>
  );
};

export default DogSearch;
