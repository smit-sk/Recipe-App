
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Profile/profile';
import AllRecipeScreen from '../All Recipe/all_recipe_screen';
import { Entypo , MaterialCommunityIcons } from '@expo/vector-icons';
import AddRecipeScreen from '../Add Recipe/add_recipe_screen';
import MyRecipe from '../My Recipe/my_recipe';

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Recipe"
        options={
          {
            tabBarActiveTintColor: "#008080",
            tabBarInActiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 14
            },
            headerShown: true,
            // tabBarBadge: 2,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Entypo name="list" size={size} color={color} />
              )
            }
          }
        }
        component={AllRecipeScreen} />
      <Tab.Screen name="My Recipe" 
        options={
          {
            tabBarActiveTintColor: "#008080",
            tabBarInActiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 14
            },
            headerShown: true,
            // tabBarBadge: 2,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Entypo name="add-to-list" size={size} color={color} />
              )
            }
          }
        }
       component={MyRecipe} />
      <Tab.Screen name="Profile"
      options={
          {
            tabBarActiveTintColor: "#008080",
            tabBarInActiveTintColor: "gray",
            tabBarLabelStyle: {
              fontSize: 14
            },
            headerShown: true,
            // tabBarBadge: 2,
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <MaterialCommunityIcons name="account" size={size} color={color} />
              )
            }
          }
        }
       component={ProfileScreen} />
    </Tab.Navigator>
  )
}