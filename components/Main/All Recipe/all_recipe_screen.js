import { View, Text , FlatList , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles';

import { useEffect } from 'react'; 

import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipe } from '../../../Redux/all_recipe_slice';
import { fetchRecipeFirestore } from '../../Database/recipeData';
import { AntDesign } from '@expo/vector-icons';

export default function AllRecipeScreen({navigation}) {
  const dispatch = useDispatch();
  const recipe_list = useSelector((state)=>state.allRecipe.recipe_list);

  useEffect(() => {
    async function fetchData() {
      const recipeList = await fetchRecipeFirestore();
      dispatch(fetchAllRecipe(recipeList));
    }

    fetchData();
  }, [dispatch]);

  const onViewRecipe = (item)=>{
    navigation.navigate('View Recipe' , {item});
  } 

  const renderItem = ({ item }) => (
    console.log("image url => ",item.imageURI),
    <TouchableOpacity onPress = {()=> onViewRecipe(item)}>
    <View style={styles.recipeContainer}>
      <Image source={{uri:item.imageURI}} style={styles.recipeImage} />
        <View style={styles.titleContainer}>
          <Text style={styles.recipeTitle}>{item.recipeName}</Text>
          <AntDesign name="rightcircle" size={24} color="#008080" />
        </View>
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