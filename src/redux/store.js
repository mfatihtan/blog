import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../redux/sileces/authSlice'

export const store = configureStore({
      reducer: {
            auth: autReducer,
      },
})