import { View, Text , FlatList , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

import { useEffect } from 'react'; 

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipe } from '../../../Redux/all_recipe_slice';
import { fetchRecipeFirestore } from '../../Database/recipeData';

  
export default function AllRecipeScreen({navigation}) {
  const dispatch = useDispatch();
  const recipe_list = useSelector((state)=>state.allRecipe.recipe_list);

[recipeData, setRecipeData] = useState(data);
  useEffect(async () => {
      const recipeList = await fetchRecipeFirestore()
      console.log("RECIPE " , recipeList);
      dispatch(fetchAllRecipe(recipeList));

  }, []);

  const onViewRecipe = (item)=>{
    navigation.navigate('View Recipe' , {item});
  } 

  const renderItem = ({ item }) => (
    console.log("image url => ",item.imageURI),
    <TouchableOpacity onPress = {()=> onViewRecipe(item)}>
    <View style={styles.recipeContainer}>
      <Image source={{uri:item.imageURI}} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.recipeName}</Text>
      {/* <Text style={styles.recipeDescription}>{item.description}</Text> */}
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipe_list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContainer}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  )
}