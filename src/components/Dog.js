/*
* Dog component is used to display the dog breed images and breed name
* used in: DogSearch.js
* props: breed, breedImages
*/

import React, { useMemo } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const Description = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
  }
`;
const Dog = ({ breed, breedImages }) => {
  const params = useParams();
  const id = useMemo(() => params.id, [params]);
  const nextRoute = id ? `/breed/${id}/sub-breed/${breed}`: `breed/${breed}` ;
  const image = useMemo(() => {
    if (!breedImages[breed]) {
      return null;
    }
    return breedImages[breed][0];
  }, [breed, breedImages]);
  return (
    <Container className="noselect">
      <Link to={nextRoute}>
        {image && <Image src={image} alt={breed} />}
        <Description>{breed.toUpperCase()}</Description>
      </Link>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    breedImages: state.breeds.breedImages,
  };
};
export default connect(mapStateToProps)(Dog);
