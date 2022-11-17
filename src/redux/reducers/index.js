import { combineReducers } from "@reduxjs/toolkit";
import breedsReducer from "./breeds";

export default combineReducers({breeds: breedsReducer})