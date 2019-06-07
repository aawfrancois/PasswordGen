import React from 'react'
import firebase from 'firebase'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import the different screens
import Loading from './screens/Loading'
import SignUp from './screens/SignUp'
import Login from './screens/Login'
import Main from './screens/Main'

// create our app's navigation stack
export default createAppContainer(
    createSwitchNavigator(
        {
            Loading,
            SignUp,
            Login,
            Main
        },
        {
            initialRouteName: 'Loading'
        }
    )
)
let config = {
    apiKey: 'AIzaSyD2syts9xsbRJDCy68VATwGG_QRfSvGmj4',
    authDomain: 'appliinsominak.firebaseapp.com',
    databaseURL: 'https://appliinsominak.firebaseio.com',
    projectId: 'appliinsominak',
    storageBucket: 'appliinsominak.appspot.com',
    messagingSenderId: '566990306444',
    appId: "1:566990306444:web:a1555acf16a6eb46"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

