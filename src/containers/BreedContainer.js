import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const BreedContainer = ({ breedImages }) => {
  const params = useParams();
  const breed = useMemo(() => {
    return params.id;
  }, [params.id]);
  return (
    <MainLayout center>
      <h1>Show all images for the {breed} breed here!</h1>
      <h3>List all subbreeds here and have ability to route to the subbreed page</h3>
    </MainLayout>
  );
};
const mapStateToProps = (state) => {
  return {
    breedImages: state.breeds.breedImages,
  };
};
export default connect(mapStateToProps)(BreedContainer);
