// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Replace with your Firebase configuration values
const firebaseConfig = {
    apiKey: "AIzaSyBfvR4sE9qoLIU64dC3R1d1IAkOoMMIzdk",
    authDomain: "bakes-4c37d.firebaseapp.com",
    projectId: "bakes-4c37d",
    storageBucket: "bakes-4c37d.firebasestorage.app",
    messagingSenderId: "81260174361",
    appId: "1:81260174361:ios:93d7279f25d3ea4c43de88",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});


export { auth };
