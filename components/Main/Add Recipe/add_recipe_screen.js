import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../Add Recipe/styles';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from "../../Database/config";
import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import {firebase} from '../../Database/config';
const db = getFirestore(app); 

export default function AddRecipeScreen() {

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [imageURI, setImageURI] = useState('');

  const handleImageSelection = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }
    
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    
    if (!result.canceled) {
      const imageURI = result.assets[0].uri;
      setImageURI(imageURI);
      console.log("The uri is ", imageURI );
    }
  };

  const handleAddRecipe = async () => {
    try {
      const response = await fetch(imageURI);
      const blob = await response.blob();
  
      const storage = getStorage(firebase);

  
      const fileName = imageURI.split('/').pop();

      console.log("fileName"+ fileName);
      const storageRef = ref(storage, 'recipeImages/' + fileName); 
      await uploadBytes(storageRef, blob); 
      const imageUrl = await getDownloadURL(storageRef); 

      const recipeRef = collection(db, 'recipes');
      const newRecipe = {
        recipeName: recipeName,
        description: description,
        imageURI: imageUrl,
      };
  
      await addDoc(recipeRef, newRecipe);
      setRecipeName('');
      setDescription('');
      setImageURI('');
      console.log('Recipe added to Firebase Realtime Database');
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };
  

return (
  <ScrollView style={styles.container}>
   <TouchableOpacity style={styles.imageContainer} onPress={handleImageSelection}>
  {imageURI ? (
    <Image source={{ uri: imageURI }} style={styles.recipeImage} />
  ) : (
    <>
      <Ionicons name="md-images-outline" size={24} color="black" />
      <Text style={styles.imagePlaceholderText}>Select an Image</Text>
    </>
  )}
</TouchableOpacity>
    <Text style={styles.label}>Recipe Name</Text>
    <TextInput
      style={styles.input}
      placeholder="Enter recipe name"
      value={recipeName}
      onChangeText={setRecipeName}
    />

    <Text style={styles.label}>Description</Text>
    <TextInput
      style={styles.inputLarge}
      placeholder="Enter recipe description"
      multiline
      numberOfLines={4}
      value={description}i
      onChangeText={setDescription}
    />

    <TouchableOpacity style={styles.buttonContainer} onPress={handleAddRecipe}>
      <Text style={styles.buttonText}>Add Recipe</Text>
    </TouchableOpacity>
  </ScrollView>
);
}

