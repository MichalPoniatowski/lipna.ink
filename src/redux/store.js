import { configureStore } from "@reduxjs/toolkit";

// import { galleryReducer } from "./gallery/reducers-gallery";
import { galleryReducer } from "./gallery/silce-gallery";

export const store = configureStore({
  reducer: { gallery: galleryReducer },
});
