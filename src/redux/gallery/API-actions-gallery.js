import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { GALLERY_URL } from "../../../api.URLs";
import { toastError } from "../../components/Toasts/Toasts";

export const getImages = createAsyncThunk(
  "gallery/getImages",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(GALLERY_URL, {
        params: {
          page: 1,
        },
      });

      const images = response.data.images.docs.map((image) => ({
        id: image._id,
        imageUrl: `${GALLERY_URL + image._id}`,
        alt: image.image_name,
      }));
      const nextPage = response.data.images.hasNextPage;
      const convertedResponse = { images, nextPage, page: 1 };
      console.log("API GALLERY RES:", convertedResponse);

      return convertedResponse;
    } catch (error) {
      console.log("Error with fetching images from API: ", error.message);
      toastError(
        "Bład podczas pobierania galerii. Przełąduj stronę lub spróbuj za chwilę."
      );

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getMoreImages = createAsyncThunk(
  "gallery/getMoreImages",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(GALLERY_URL, {
        params: {
          page: page,
        },
      });

      const images = response.data.images.docs.map((image) => ({
        id: image._id,
        imageUrl: `${GALLERY_URL + image._id}`,
        alt: image.image_name,
      }));
      const nextPage = response.data.images.hasNextPage;
      const convertedResponse = { images, nextPage, page: page };
      console.log("API GALLERY RES:", convertedResponse);

      return convertedResponse;
    } catch (error) {
      console.log("Error with fetching images from API: ", error.message);
      toastError(
        "Bład podczas pobierania galerii. Przełąduj stronę lub spróbuj za chwilę."
      );

      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
