import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      token: "",
      isAuth: false,
}

export const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            loading: (state, action) => {
                  state.token = action.payload.token;
                  state.isAuth = true;
            },
            logout: (state) => {
                  state.isAuth = false;
                  state.token = "";
            },
      },
})

export const { loading, logout } = authSlice.actions

export default authSlice.reducer