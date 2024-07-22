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
                  // console.log("comments: ", state.data[actions.payload.postId].comments);
            },
            setNewPost: (state, actions) => {
                  state.data = {
                        [actions.payload.postId]: actions.payload.post,
                        ...state.data,
                  };
                  // console.log(actions.payload);
            },
            deleteComment: (state, actions) => {
                  state.data[actions.payload.postId].comments = state.data[actions.payload.postId].comments.filter((value) => value.comment_id != actions.payload.comment_id);
                  //console.log(state.data[actions.payload.postId].comments);
            },
            updateComment: (state, actions) => {
                  const commentData = actions.payload.newComment;
                  const index = state.data[actions.payload.postId].comments.findIndex((value) => value.comment_id == commentData.comment_id);
                  if (index != -1) {
                        state.data[actions.payload.postId].comments[index] = commentData;
                  }
                  // console.log(state.data[actions.payload.postId].comments);
            }
      },
})

export const { setLikePost, setUnLikePost, setComment, setNewPost, deleteComment, updateComment } = dataSlice.actions;
export default dataSlice.reducer;