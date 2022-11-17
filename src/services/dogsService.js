import axios from "axios";

const baseUrl = "https://dog.ceo/api";

export const getAllBreeds = async () => {
  return await callApi(`${baseUrl}/breeds/list/all`);
};

/// Max count can be 50
export const getRandomBreedImage = async (breed, count = 1) => {
  return await callApi(`${baseUrl}/breed/${breed}/images/random/${count}`);
};

export const getAllImagesForBreed = async (breed) => {
  return await callApi(`${baseUrl}/breed/${breed}/images`);
};

export const getAllSubBreeds = async (breed) => {
  return await callApi(`${baseUrl}/breed/${breed}/list`);
};

/// Max count can be 50
export const getRandomSubBreedImage = async (breed, subBreed, count = 1) => {
  return await callApi(
    `${baseUrl}/breed/${breed}/${subBreed}/images/random/${count}`
  );
};

export const getAllImagesForSubBreed = async (breed, subBreed) => {
  return await callApi(`${baseUrl}/breed/${breed}/${subBreed}/images`);
};
export const callApi = async (url) => {
  try {
    const res = await axios({
      method: "get",
      url: url,
      responseType: "json",
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
