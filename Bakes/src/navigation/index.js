// src/navigation/index.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: '#f8f8f8' },
                tabBarActiveTintColor: '#333',
                tabBarInactiveTintColor: '#aaa',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            {/* Add more tabs as needed, e.g. Recipes, Favorites */}
        </Tab.Navigator>
    );
}
