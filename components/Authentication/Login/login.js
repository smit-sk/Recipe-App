import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './styles';
import firebase from '../../Database/config';
import { loginAuth } from '../../Database/auth';


const LoginScreen = ({ navigation }) => {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async () => {
      
        setEmailError('');
        setPasswordError('');


     
        let isValid = true;
        if (!email.trim()) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        }
        if (!password.trim()) {
            setPasswordError('Password is required');
            isValid = false;
        }

        if (isValid) {

            setEmailError('');
            setPasswordError('');

           
            loginAuth(email.toLowerCase() , password).then((res)=>{
                if(res){
                    navigation.navigate('Home');
                    console.log('Login Success');  
                }else{
                    console.log(
                        'Error in log In '
                    )
                }
            });

           
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const onSignUp = () => {
        navigation.navigate('Signup');
        console.log('Sign Up');
    };

    const onForgot = () => {
        navigation.navigate('Forgot');
        console.log('==>Forgot<==');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login Here..</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

            <View style={styles.forgotContainer}>
                <TouchableOpacity onPress={onForgot}>
                    <Text style={styles.forgotText}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signupContainer}>
                <Text style={styles.donthaveText}>Don't have an account? </Text>
                <TouchableOpacity onPress={onSignUp}>
                    <Text style={styles.signupText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
