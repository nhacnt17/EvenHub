import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreens = () => {
  return (
    <View>
      <Text>LoginScreens</Text>
      <Button
      title='login'
      onPress={async () =>
        await AsyncStorage.setItem('assetToken', 'asdasd')
      }
      />
    </View>
  )
}

export default LoginScreens