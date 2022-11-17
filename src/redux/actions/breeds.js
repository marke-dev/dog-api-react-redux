import { getAllBreeds, getRandomBreedImage } from "../../services/dogsService";
import {
  SET_BREEDS,
  SET_BREED_IMAGE,
  SET_BREED_IMAGES,
} from "../reducers/breeds";
export const setBreeds = (breeds) => {
  return { type: SET_BREEDS, payload: breeds };
};

export const setBreedImage = (breed, image) => {
  return { type: SET_BREED_IMAGE, payload: { breed, image } };
};

export const setBreedImages = (breed, images) => {
  return { type: SET_BREED_IMAGES, payload: { breed, images } };
};

export const getBreeds = () => async (dispatch) => {
  const data = await getAllBreeds();
  dispatch(setBreeds(data.message));

  const breeds = Object.entries(data.message).map((a) => a[0]);
  breeds.forEach((b) => {
    getRandomBreedImage(b, 1).then((value) => {
      dispatch(setBreedImage(b, value.message));
    });
  });
};
