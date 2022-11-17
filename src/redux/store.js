import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";

export default configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
