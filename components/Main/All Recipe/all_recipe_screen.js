import { View, Text , FlatList , Image } from 'react-native'
import React from 'react'
import styles from './styles';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react'; // Import useEffect and useState
import {app} from "../../Database/config";
const db = getFirestore(app); 

export default function AllRecipeScreen() {

  const data = [
    {
      id: '0',
      title: 'Delicious Pasta',
      description: 'Creamy pasta with veggies and cheese',
      image: require('../../../assets/fries.jpg'),
    },
    {
      id: '1',
      title: 'Healthy Salad',
      description: 'Fresh veggies and greens with a tangy dressing',
      image: require('.../../../assets/fries.jpg'),
    },
    {
      id: '2',
      title: 'Healthy Salad',
      description: 'Fresh veggies and greens with a tangy dressing',
      image: require('../../../assets/fries.jpg'),
    },
    {
      id: '3',
      title: 'Healthy Salad',
      description: 'Fresh veggies and greens with a tangy dressing',
      image: require('../../../assets/fries.jpg'),
    },
    // Add more recipe data as needed
  ];

  
  const [recipeData, setRecipeData] = useState(data);

  useEffect(() => {
    
    const fetchData = async () => {
      const recipeRef = collection(db, 'recipes');
      const querySnapshot = await getDocs(recipeRef);
  
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
  
      setRecipeData(fetchedData);
    };
  
    fetchData();
  }, []);


  const renderItem = ({ item }) => (
    console.log("imageITEM",item.imageURI),
    <View style={styles.recipeContainer}>
      <Image source={{uri:item.imageURI}} style={styles.recipeImage} />
      <Text style={styles.recipeTitle}>{item.recipeName}</Text>
      <Text style={styles.recipeDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipeData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.feedContainer}
        showsVerticalScrollIndicator={false} 
      />
    </View>
  )
}