import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setLogout: (state, action) => {
      state.login = "";
    },
  },
});

export const { setLogin, setLogout } = LoginSlice.actions;

export default LoginSlice.reducer;
