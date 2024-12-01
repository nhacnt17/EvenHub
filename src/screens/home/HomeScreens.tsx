import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreens = () => {
  return (
    <View>
      <Text>HomeScreensds</Text>    
      <Button
      title='logout'
      onPress={async () =>
        await AsyncStorage.setItem('assetToken', '')
      }
      />
    </View>
  )
}

export default HomeScreens