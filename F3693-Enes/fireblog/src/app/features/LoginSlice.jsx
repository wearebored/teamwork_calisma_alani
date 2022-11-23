import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "enesooo78@gmail.com",
  uid: "sadsad",
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload;
    },
    setLogout: (state, action) => {
      state.login = "";
    },
    setLoginData: (state, action) => {},
  },
});

export const { setLogin, setLogout, setLoginData } = LoginSlice.actions;

export default LoginSlice.reducer;
