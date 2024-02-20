import {
  getAllBreeds,
  getAllImagesForBreed,
  getRandomBreedImage,
  getAllSubBreeds,
  getRandomSubBreedImage,
  getAllImagesForSubBreed,
} from "../../services/dogsService";
import {
  SET_BREEDS,
  SET_BREED_IMAGE,
  SET_BREED_IMAGES,
  SET_SUB_BREEDS,
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

export const setSubBreeds = (breed, subBreeds) => {
  return { type: SET_SUB_BREEDS, payload: { breed, subBreeds } };
};

export const getSubBreedImages = (breed, subBreed) => async (dispatch) => {
  const data = await getAllImagesForSubBreed(breed, subBreed, 10);
  dispatch(setBreedImages(subBreed, data.message));
}

export const getSubBreeds = (breed) => async (dispatch) => {
  const data = await getAllSubBreeds(breed);
  dispatch(setSubBreeds(breed, data.message));

  const subBreeds = Object.entries(data.message).map((a) => a[1]);
  subBreeds.forEach((sb) => {
    getRandomSubBreedImage(breed, sb, 1).then((value) => {
      dispatch(setBreedImage(sb, value.message));
    });
  });
};

export const getBreedImages = (breed) => async (dispatch) => {
  const data = await getAllImagesForBreed(breed);
  dispatch(setBreedImages(breed, data.message));
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
