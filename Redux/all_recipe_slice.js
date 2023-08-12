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
}

export const allRecipeSlice = createSlice({
    name : 'allRecipe',
    initialState : initialState,
    reducers : {
        fetchAllRecipe : (state , action)=>{
            state.recipe_list = action.payload;
            console.log("Fetch Recipe Called " , state.payload)
        },
        
    }
})

export const { fetchAllRecipe } = allRecipeSlice.actions;
export default allRecipeSlice.reducer;