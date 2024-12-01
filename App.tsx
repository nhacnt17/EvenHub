import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer, StackRouter, TabActions, useFocusEffect } from '@react-navigation/native'
import { SlapScreens } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { useAnimatedGestureHandler } from 'react-native-reanimated';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  const [isShowSplash, setShowSplash] = useState(true);
  const [asseToken, setAssetToken] = useState('')

  const {getItem, setItem} = useAsyncStorage('assetToken')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false)
    }, 1500);
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() =>{
    checkLogin();
  }, []);


  const checkLogin = async () =>  {
    const token = await getItem();
    token && setAssetToken(token)
  }
  return <>
  <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent/>
    {isShowSplash ? (
      <SlapScreens />
    ) : (
      <NavigationContainer>
        {
          asseToken ? <MainNavigator/> : <AuthNavigator/>
        }
      </NavigationContainer>
    )},
  </>
};

export default App