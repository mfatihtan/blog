import { createSlice } from "@reduxjs/toolkit";
import testData from '../../../assets/testData';

const initialState = {
      data: testData,
}

export const dataSlice = createSlice({
      name: "data",
      initialState,
      reducers: {
            setUnLikePost: (state, actions) => {
                  state.data[actions.payload.postId].likes = actions.payload.newLikes;
                  //console.log("unlikes: ", state.data[actions.payload.postId].likes);
            },
            setLikePost: (state, actions) => {
                  state.data[actions.payload.postId].likes.push(actions.payload.userMe);
                  //console.log("likes: ", state.data[actions.payload.postId].likes);
            },
            setComment: (state, actions) => {
                  state.data[actions.payload.postId].comments.push(actions.payload.newComment);
                  //console.log("comments: ", state.data[actions.payload.postId].comments);
            }
      },
})

export const { setLikePost, setUnLikePost, setComment } = dataSlice.actions;
export default dataSlice.reducer;