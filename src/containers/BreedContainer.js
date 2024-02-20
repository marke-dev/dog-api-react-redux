
/*
* This container is responsible for displaying all images for a specific breed. 
* It also displays all subbreeds for a specific breed.
* used in: App.js
* props: breeds, breedImages
*/

import React, { useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { getBreedImages, getSubBreeds } from "../redux/actions/breeds";
import { Container } from "../styles/FlexBox";
import DogImageList from "../components/DogImageList";
import DogSearch from "../components/DogSearch";

const BreedContainer = ({ breeds, breedImages }) => {
  const params = useParams();
  const breed = useMemo(() => {
    return params.id;
  }, [params.id]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (breedImages[breed] === undefined || breedImages[breed].length <= 1) {
      dispatch(getBreedImages(breed));
    }

    dispatch(getSubBreeds(breed));
  }, [breed, dispatch]);

  return (
    <MainLayout center>
      <h1>Show all images for the {breed} breed here!</h1>
      <Container center>
        <DogImageList dogBreedImages={breedImages[breed]} breed={breed} />
      </Container>
      {breeds[breed] && breeds[breed].length > 0 && (
        <>
          <h3>
            List all subbreeds here and have ability to route to the subbreed
            page
          </h3>
          <Container center>
            <DogSearch breeds={breeds[breed]} />
          </Container>
        </>
      )}
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    breeds: state.breeds.breeds,
    breedImages: state.breeds.breedImages,
  };
};
export default connect(mapStateToProps)(BreedContainer);
