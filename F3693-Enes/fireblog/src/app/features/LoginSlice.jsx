import { createSlice } from '@reduxjs/toolkit'

const initialState = {
login:false,
}

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin:(state,action)=>{

    }

  }
});

export const {setLogin} = LoginSlice.actions

export default LoginSlice.reducer