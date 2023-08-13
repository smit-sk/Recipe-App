import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function ViewRecipe({ route, navigation }) {
  const { item } = route.params;

  const goBack = () => {
    navigation.goBack();
  };



  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageURI }} style={styles.recipeImage} />
      <TouchableOpacity style={styles.backIcon} onPress={goBack}>
        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#008080" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <View style={styles.recipeContent}>
        <Text style={styles.recipeTitle}>{item.recipeName}</Text>
        <Text style={styles.recipeDescription}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}