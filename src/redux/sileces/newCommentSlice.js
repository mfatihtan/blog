import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      comment: "",
      comment_id: "",
      re_comment: false,
};

const newCommnetSlice = createSlice({
      name: "newComment",
      initialState,
      reducers: {
            setNewComment: (state, actions) => {
                  state.comment = actions.payload.comment;
                  state.comment_id = actions.payload.comment_id;
                  if (state.comment_id != "") state.re_comment = true;
            },
            setNewCommentNull: (state) => {
                  state.comment = "";
                  state.comment_id = "";
                  state.re_comment = false;
            }
      },
})

export const { setNewComment, setNewCommentNull } = newCommnetSlice.actions;
export default newCommnetSlice.reducer;
