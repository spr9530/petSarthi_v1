import { configureStore } from "@reduxjs/toolkit";
import docAuthReducer from "../redux/doctorReducers/slice/docAuthSlice";

const store = configureStore({
  reducer: {
    auth: docAuthReducer,
  },
});

export default store;
