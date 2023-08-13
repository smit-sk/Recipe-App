import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView, View, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../Add Recipe/styles';
import { Ionicons } from '@expo/vector-icons';
import { getFirestore, collection, addDoc, updateDoc, doc } from 'firebase/firestore';
import app from "../../Database/config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebase } from '../../Database/config';
import { MaterialIcons } from '@expo/vector-icons';
import { fetchAllRecipe, fetchRecipeById } from '../../../Redux/all_recipe_slice';
import { fetchRecipeFirestore, fetchRecipebyIdFirestore } from '../../Database/recipeData';
const db = getFirestore(app);

import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from '../../Database/auth';

export default function EditRecipeScreen({ navigation, route }) {
  const { item } = route.params;
  const [userId, setUserId] = useState("");
  useEffect(() => {
    async function fetchData() {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUserId(currentUser.uid)
      }
    }
    fetchData();
  }, [dispatch]);


  const dispatch = useDispatch();

  const [recipeName, setRecipeName] = useState(item.recipeName);
  const [description, setDescription] = useState(item.description);
  const [imageURI, setImageURI] = useState(item.imageURI);
  const [isFormValid, setIsFormValid] = useState(false);


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
      // const imageURI = "https://www.southernliving.com/thmb/jM1YjcVqzkt-Ej6pMp7qK--c_9Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg"
      setImageURI(imageURI);
      console.log("The uri is ", imageURI);
    }
  };

  const handleAddRecipe = async () => {
    try {
      if (imageURI != "") {
        const response = await fetch(imageURI);
        const blob = await response.blob();
        const storage = getStorage(firebase);
        const fileName = imageURI.split('/').pop();

        console.log("fileName" + fileName);
        const storageRef = ref(storage, 'recipeImages/' + fileName);
        await uploadBytes(storageRef, blob);
        const imageUrl = await getDownloadURL(storageRef);
        if (recipeName != "" & description != "") {
          console.log("Form Valid")

          const recipeRef = doc(db, 'recipes', item.id);
          const newRecipe = {
            recipeName: recipeName,
            description: description,
            imageURI: imageURI,
          };
          await updateDoc(recipeRef, newRecipe)

          const data = await fetchRecipebyIdFirestore(userId);
          dispatch(fetchRecipeById(data));
          const data2 = await fetchRecipeFirestore();
          dispatch(fetchAllRecipe(data2));

          console.log('Recipe updated to Firebase Realtime Database');
        } else {
          console.log("Form InValid")
          Alert.alert("Invalid Recipe", "Please fill all the fields.", [
            {
              text: 'Ok',
              onPress: () => console.log('Image alert Pressed'),
              style: 'default'
            },])
        }
      } else {
        Alert.alert("Invalid Recipe", "Select a recipe image", [
          {
            text: 'Ok',
            onPress: () => console.log('Image alert Pressed'),
            style: 'default'
          },])
      }
    } catch (error) {
      console.error('Error adding recipe: ', error);
    }
  };

  const validateForm = () => {
    const isImageValid = imageURI !== '';
    const isRecipeNameValid = recipeName !== '';
    const isDescriptionValid = description !== '';
    return isImageValid && isRecipeNameValid && isDescriptionValid;
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.appBar}>
        <MaterialIcons.Button
          name="arrow-back-ios"
          size={24}
          color="#008080"
          backgroundColor="white"
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: '600' }}> Edit Recipe</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imageView}>
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
        </View>
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
          value={description} i
          onChangeText={setDescription}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={handleAddRecipe}>
          <Text style={styles.buttonText}>Update Recipe</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

