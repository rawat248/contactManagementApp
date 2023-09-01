import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./index";

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export default store;
