/*
* This container is responsible for rendering the list of all breeds and the search bar.
* used in: App.js
* props: breeds
*/
import React from "react";
import { connect } from "react-redux";
import MainLayout from "../components/MainLayout";
import DogSearch from "../components/DogSearch";
const BreedsContainer = ({ breeds }) => {

  return (
    <MainLayout>
      <h1>All Breeds</h1>
      <DogSearch breeds={breeds} />
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return { breeds: Object.entries(state.breeds.breeds).map((a) => a[0]) };
};
export default connect(mapStateToProps)(BreedsContainer);
