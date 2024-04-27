import { createReducer } from "@reduxjs/toolkit";
import { getImages, loadMoreImages } from "./actions-gallery";

getImages;

const initialGallery = [];

export const galleryReducer = createReducer(initialGallery, (builder) => {
  builder
    .addCase(getImages, (state, action) => {
      return action.payload;
    })
    .addCase(loadMoreImages, (state, action) => {
      return [...state, ...action.payload];
    });
});
