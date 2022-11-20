import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
  logindata:"",
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
    setLoginData:(state,action)=>{

    }
  },
});

export const { setLogin, setLogout,setLoginData } = LoginSlice.actions;

export default LoginSlice.reducer;
