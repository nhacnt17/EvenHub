import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { SlapScreens } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {

  const [isShowSplash, setShowSplash] = useState(true);

  useEffect(() =>  {
    const timeout =setTimeout(()=> {
      setShowSplash(false)
    }, 1500);
    return () => clearTimeout(timeout)
  },[])

  return (
    isShowSplash ? <SlapScreens/> : (
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
    ) 
  )
}

export default App