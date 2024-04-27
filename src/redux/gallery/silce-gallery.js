import { createSlice } from "@reduxjs/toolkit";

import { getImages, getMoreImages } from "./API-actions-gallery";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    images: [],
    isLoading: false,
    error: null,
    isNextPage: false,
    currentPage: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.images = action.payload.images;
        state.isNextPage = action.payload.nextPage;
        state.currentPage = action.payload.page;
      })

      .addCase(getImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMoreImages.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getMoreImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.images = [...state.images, ...action.payload.images];
        state.isNextPage = action.payload.nextPage;
        state.currentPage = action.payload.page;
      })

      .addCase(getMoreImages.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const galleryReducer = gallerySlice.reducer;

// const gallerySlice = createSlice({
//       name: "gallery",
//       initialState: initialGallery,
//       reducers: {
//         getImages: (state, action) => {
//           return action.payload;
//         },

//         loadMoreImages: (state, action) => {
//           return [...state, ...action.payload];
//         },
//       },
//     });

//     export const { getImages, loadMoreImages } = gallerySlice.actions;
//     export const galleryReducer = gallerySlice.reducer;
