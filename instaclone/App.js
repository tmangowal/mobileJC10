import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen'
import MainSwitchNavigator from './src/navigators/MainSwitchNavigator';



export default function App() {

    var firebaseConfig = {
      apiKey: "AIzaSyCXgEamnRPUaz-MafhvGVmBxrzyECVh4Kg",
      authDomain: "instaclone-81b26.firebaseapp.com",
      databaseURL: "https://instaclone-81b26.firebaseio.com",
      projectId: "instaclone-81b26",
      storageBucket: "instaclone-81b26.appspot.com",
      messagingSenderId: "362616242727",
      appId: "1:362616242727:web:bfa7da2b2f3a2d59574402"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  return (
      <MainSwitchNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
