import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Dog from "../components/Dog";
import MainLayout from "../components/MainLayout";
import { Container } from "../styles/FlexBox";
const BreedsContainer = ({ breeds }) => {
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length > 0) {
      
    }
    else {
      setFilteredBreeds(breeds)
    }
  }, [breeds, searchInput]);
  return (
    <MainLayout>
      <h1>All Breeds</h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      <Container center>
        {filteredBreeds.map((b, i) => {
          return <Dog breed={b} key={i} />;
        })}
      </Container>
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return { breeds: Object.entries(state.breeds.breeds).map((a) => a[0]) };
};
export default connect(mapStateToProps)(BreedsContainer);
