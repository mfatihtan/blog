import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      image: "",
      images: [],
      input: "",
};

export const imageSlice = createSlice({
      name: "image",
      initialState,
      reducers: {
            setImage: (state, actions) => {
                  state.image = actions.payload;
            },
            setImages: (state, actions) => {
                  state.images = actions.payload;
            },
            setInput: (state, actions) => {
                  state.input = actions.payload;
            },
      }
})

export const { setImage, setImages, setInput } = imageSlice.actions;
export default imageSlice.reducer;