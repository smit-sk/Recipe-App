import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ActionButton from 'react-native-action-button'
import { useEffect } from 'react'
import styles from './styles'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipeById } from '../../../Redux/all_recipe_slice'
import {  Feather } from '@expo/vector-icons'
import { getCurrentUser } from '../../Database/auth'
import { fetchRecipebyIdFirestore } from '../../Database/recipeData'

export default function MyRecipe({ navigation }) {
  const dispatch = useDispatch();
  const recipe_list = useSelector((state)=>state.allRecipe.my_recipe);
 
  useEffect(() => {
    
    async function fetchData() {

      const currentUser = await getCurrentUser();
      if (currentUser) {
        const recipeList = await fetchRecipebyIdFirestore(currentUser.uid);
        dispatch(fetchRecipeById(recipeList));
    }
    }
    fetchData();
    
  }, [dispatch]);

  const renderItem = ({ item }) => (
    console.log("image url => ", item.imageURI),
    <TouchableOpacity onPress={() => navigation.navigate('Edit Recipe', { item   })}>
      <View style={styles.recipeContainer}>
        <Image source={{ uri: item.imageURI }} style={styles.recipeImage} />

         <View style={styles.titleContainer}>
          <Text style={styles.recipeTitle}>{item.recipeName}</Text>
          <Feather name="edit" size={24} color="#008080" />
        </View>
      </View>
    </TouchableOpacity>
  );

 
    const clickHandler = () => {
      
      navigation.navigate('Add Recipe')
    };

  return (
    <View style={styles.container}>
        <FlatList
          data={recipe_list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.feedContainer}
          showsVerticalScrollIndicator={false}
        />
      {/* <ActionButton
        buttonColor="#008080"
        spacing={60}
        elevation={10}
        onPress={() => navigation.navigate('Add Recipe')}></ActionButton> */}
         <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
            source={
            require("../../../assets/plusButton.png")
            }
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
    </View>

  )
}