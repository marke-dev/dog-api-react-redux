import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const SubBreedContainer = () => {
  const params = useParams();
  const breed = useMemo(() => params.breed, [params]);
  const subBreed = useMemo(() => params.sub, [params]);
  return (
    <MainLayout center>
      <h1>
        Show all images for the {subBreed} {breed} breed here!
      </h1>
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    breedImages: state.breeds.breedImages,
  };
};
export default connect(mapStateToProps)(SubBreedContainer);
