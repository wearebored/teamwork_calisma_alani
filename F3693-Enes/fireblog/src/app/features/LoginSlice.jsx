import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "KWgIlOQHn5OrcuoTZ61BX98Jn5o2",
  email: "enesooo78@gmail.com",
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload.uid;
      state.email = action.payload.email;
    },
    setLogout: (state, action) => {
      state.login = "";
      state.email = "";
    },
  },
});

export const { setLogin, setLogout, setLoginData } = LoginSlice.actions;

export default LoginSlice.reducer;
