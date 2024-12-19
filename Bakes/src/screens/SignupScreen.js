// src/screens/SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // On success, the user is authenticated and will see MainTabs in App.js.
        } catch (error) {
            console.log('Signup error:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create An Account</Text>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize='none'
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                Already have an account? Login
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    link: {
        marginTop: 15,
        color: '#0066CC',
    },
});
