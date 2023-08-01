import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
        isLogin : true
}

export const authenticationSlice = createSlice({
    name : 'auth',
    initialState : initialState,
    reducers : {
        
    }
})

export const { } = authenticationSlice.actions;
export default authenticationSlice.reducer;