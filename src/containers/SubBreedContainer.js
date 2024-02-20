/*
* SubBreedContainer.js is a container component that is responsible for displaying all images for the selected sub-breed.
* used in: App.js
* props: breedImages
*/

import React, { useMemo, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { getSubBreedImages } from "../redux/actions/breeds";
import DogImageList from "../components/DogImageList";  

const SubBreedContainer = ({ breedImages }) => {
  const params = useParams();
  const breed = useMemo(() => params.breed, [params]);
  const subBreed = useMemo(() => params.sub, [params]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubBreedImages(breed, subBreed));
  }, [breed, subBreed, dispatch]);

  return (
    <MainLayout center>
      <h1>
        Show all images for the {subBreed} {breed} breed here!
      </h1>
      <DogImageList dogBreedImages={breedImages[subBreed]} breed={subBreed} />
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    breedImages: state.breeds.breedImages,
  };
};
export default connect(mapStateToProps)(SubBreedContainer);
