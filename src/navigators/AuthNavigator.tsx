import { View, Text } from 'react-native'
import React, { createContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from '../screens/auth/LoginScreens';


const AuthNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name='LoginScrens' component={LoginScreens} />
        </Stack.Navigator>
    )
}

export default AuthNavigator