import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./features/LoginSlice";

export const store = configureStore({
reducer:{
    login:LoginSlice
}

})