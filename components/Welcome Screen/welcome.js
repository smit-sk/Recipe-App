import { View, Text } from 'react-native'
import React, { useEffect } from 'react';
import { styles } from './styles';
import SplashScreen from 'react-native-splash-screen';


const WelcomeScreen =  ({navigation}) => {

    useEffect(() => {
        // Simulate a delay of 2 seconds for the splash screen
        const timer = setTimeout(() => {
          navigation.navigate('Home'); // Navigate to the Home screen after 2 seconds
        }, 2000);
    
        return () => clearTimeout(timer); // Clean up the timer on unmount
      }, [navigation]);
   

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recipe App</Text>
    </View>
  );
}

export default WelcomeScreen;