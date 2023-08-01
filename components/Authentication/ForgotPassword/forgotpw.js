import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [showOTP, setShowOTP] = useState(false); // State to control OTP field visibility
  const [otp, setOTP] = useState('');

  const handleSendCode = () => {
    // Implement your code to send the reset password code to the user's email
    console.log('Send code to:', email);
    setShowOTP(true); // Show the OTP field after sending the code
  };

  const handleForgotPassword = () => {
    // Implement your code to navigate back to the login screen or perform any other action
    console.log('Forgot password clicked');
  };

  const handleBack = ()=>{
    navigation.goBack();
}

  return (
    <View style={styles.container}>
    <Ionicons.Button name="ios-chevron-back-sharp" size={34} color="black" backgroundColor='transparent' underlayColor='transparent' onPress={handleBack} />
    <View style={styles.subContainer}></View>
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password</Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      {!showOTP ? ( // Render the OTP field conditionally based on the showOTP state
        <View style={styles.centerButton}>
          <TouchableOpacity onPress={handleSendCode}>
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.label}>OTP</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP here"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setOTP(text)}
            value={otp}
          />
        </>
      )}

      <TouchableOpacity style={styles.buttonContainer} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}
