import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      head: "",
      image: "",
      description: "",
      body: "",
      tag: [],
      comments: [],
      likes: [],
}

export const newPostSlice = createSlice({
      name: "newPost",
      initialState,
      reducers: {
            setHead: (state, actions) => {
                  state.head = actions.payload;
            },
            setImage: (state, actions) => {
                  state.image = actions.payload;
            },
            setDesc: (state, actions) => {
                  state.description = actions.payload;
            },
            setBody: (state, actions) => {
                  state.body = actions.payload;
            },
            setTag: (state, actions) => {
                  state.tag = actions.payload;
            },
            setNull: (state) => {
                  state.body = "";
                  state.description = "";
                  state.head = "";
                  state.image = "";
                  state.tag = [];
                  state.comments = [];
                  state.likes = [];
            }
      }
});

export const { setBody, setHead, setDesc, setImage, setTag, setNull } = newPostSlice.actions;
export default newPostSlice.reducer;