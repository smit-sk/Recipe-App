import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication_slice";

export const store = configureStore({
    reducer:{
       auth : authReducer
    }
})