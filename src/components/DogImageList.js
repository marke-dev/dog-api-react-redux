/*
* DogImageList.js: This component is responsible for rendering the list of dog images.
* used in: BreedContainer.js, SubBreedContainer.js
* props: dogBreedImages, breed
*/

import React from 'react';
import { Container } from "../styles/FlexBox";
import { Image } from "../components/Dog";

const DogImageList = ({ dogBreedImages, breed }) => {  

    return(
        <Container center>
        {dogBreedImages &&
          dogBreedImages.map((image, i) => {
            return (
              <Container className="noselect" key={i}>
                <Image src={image} alt={breed} />
              </Container>
            );
          })}
      </Container>
    )
}
export default DogImageList;    