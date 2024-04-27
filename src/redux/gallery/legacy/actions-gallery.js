import { createAction } from "@reduxjs/toolkit";

export const getImages = createAction("gallery/getImages");

export const loadMoreImages = createAction("gallery/loadMoreImages");
