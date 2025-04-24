import { configureStore } from "@reduxjs/toolkit";
import docAuthReducer from "../redux/doctorReducers/slice/docAuthSlice";
import userReducer from "../redux/userReducers/userSlice"

const store = configureStore({
  reducer: {
    auth: docAuthReducer,
    user: userReducer,
  },
});

export default store;
