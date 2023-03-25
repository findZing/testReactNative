import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../assests/logo.png'

const Logo = ({size = 1}) => {
  return (
    <View>
      <Image source={logo} style={{
        width: 95.06 * size,
        height: 64 * size,
      }}/>
    </View>
  )
}

export default Logo


