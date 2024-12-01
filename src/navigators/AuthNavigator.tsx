import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from '../screens/auth/LoginScreens';
import { OnboardingScreens } from '../screens';


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name='OnboardingScreens' component={OnboardingScreens} />
            <Stack.Screen name='LoginScreen' component={LoginScreens} />
        </Stack.Navigator>
    )
}

export default AuthNavigator