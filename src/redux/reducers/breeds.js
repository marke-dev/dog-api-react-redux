export const SET_BREEDS = "SET_BREEDS";
export const SET_BREED_IMAGE = "SET_BREED_IMAGE";
export const SET_BREED_IMAGES = "SET_BREED_IMAGES";
const initialState = {
  breeds: {},
  breedImages: {},
};
export default function breedsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BREEDS:
      return { ...state, breeds: action.payload };

    case SET_BREED_IMAGE: {
      const updatedBreeds = { ...state.breedImages };
      updatedBreeds[action.payload.breed] = [
        ...(updatedBreeds[action.payload.breed] ?? []),
        action.payload.image,
      ];
      return { ...state, breedImages: updatedBreeds };
    }
    case SET_BREED_IMAGES: {
      const updatedBreeds = { ...state.breedImages };
      updatedBreeds[action.payload.breed] = [
        ...(updatedBreeds[action.payload.breed] ?? []),
        ...action.payload.images,
      ];
      return { ...state, breedImages: updatedBreeds };
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
