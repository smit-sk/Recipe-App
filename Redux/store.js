import { configureStore } from "@reduxjs/toolkit";

import allRecipe from "./all_recipe_slice"

export const store = configureStore({
    reducer:{
       
       allRecipe : allRecipe

    }
})