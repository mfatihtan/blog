import { configureStore } from "@reduxjs/toolkit";
import autReducer from './sileces/authSlice';
import dataReducer from './sileces/dataSlice';
import newPostReducer from './sileces/newPostSlice';

export const store = configureStore({
      reducer: {
            auth: autReducer,
            data: dataReducer,
            newPost: newPostReducer,
      },
})