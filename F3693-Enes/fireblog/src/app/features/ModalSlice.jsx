import { createSlice } from '@reduxjs/toolkit'

const initialState = {
modal:false,
}

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal:(s,a)=>{
        s.modal=!s.modal
    }
  }
});

export const {setModal} = ModalSlice.actions

export default ModalSlice.reducer