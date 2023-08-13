import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { styles } from './styles';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../../Database/auth';
import { updateProfile } from 'firebase/auth';


export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
    printUserInfo();
  }, []);

  async function printUserInfo() {
    try {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setName(currentUser.displayName)
        setEmail(currentUser.email)
       
      } else { 
        console.log("No user is currently logged in.");
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  }


  const handleUpdateProfile = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) {
      const updatedProfile = {
        displayName: name || currentUser.displayName,
      };

      await updateProfile(currentUser, updatedProfile);

      console.log("User information updated successfully.");
    } else {
      console.log("No user is currently logged in.");
    }
  
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileIcon}>
        <Image source={require('../../../assets/profile.png')} style={styles.profileImage} />
      </View>
      <View style={styles.subContainer}>
       
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          editable={false}
        />

        {/* <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          secureTextEntry
          onChangeText={(text) => setNewPassword(text)}
          value={newPassword}
        />

        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          secureTextEntry
          onChangeText={(text) => setConfirmNewPassword(text)}
          value={confirmNewPassword}
        /> */}

        <TouchableOpacity style={styles.buttonContainer} onPress={handleUpdateProfile}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

