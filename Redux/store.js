import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication_slice";
import allRecipe from "./all_recipe_slice"

export const store = configureStore({
    reducer:{
       auth : authReducer,
       allRecipe : allRecipe

    }
})