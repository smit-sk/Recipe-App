import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function ViewRecipe({ route, navigation }) {
  const { item } = route.params;

  const goBack = () => {
    console.log('Pressed Back');
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
    <View>
      <TouchableOpacity style={styles.backIcon} onPress={goBack}>
        <View style={styles.arrowContainer}>

          <MaterialIcons
            name="arrow-back-ios"
            size={24}
            color="#008080"
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>

      <Image source={{ uri: item.imageURI }} style={styles.recipeImage} />
      </View>
      <View style={styles.recipeContent}>
        <Text style={styles.recipeTitle}>{item.recipeName}</Text>
        <Text style={styles.recipeDescription}>{item.description}</Text>
      </View>
    </ScrollView>
  );
}
