import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
        recipe_list : [
            {
                id: '0',
                title: 'Delicious Pasta',
                description: 'Creamy pasta with veggies and cheese',
                image: require('../assets/fries.jpg'),
              },
        ],
        my_recipe : [

        ]
}

export const allRecipeSlice = createSlice({
    name : 'allRecipe',
    initialState : initialState,
    reducers : {
        fetchAllRecipe : (state , action)=>{
            state.recipe_list = action.payload;
        },
        fetchRecipeById:(state,action)=>{
            state.my_recipe = action.payload;
        }
        
    }
})

export const { fetchAllRecipe , fetchRecipeById } = allRecipeSlice.actions;
export default allRecipeSlice.reducer;