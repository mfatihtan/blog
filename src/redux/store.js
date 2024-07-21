import { configureStore } from "@reduxjs/toolkit";
import autReducer from './sileces/authSlice';
import dataReducer from './sileces/dataSlice';
import newPostReducer from './sileces/newPostSlice';
import imageReducer from './sileces/imageSlice';

export const store = configureStore({
      reducer: {
            auth: autReducer,
            data: dataReducer,
            newPost: newPostReducer,
            image: imageReducer,
      },
})