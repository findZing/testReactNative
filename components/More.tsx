import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const More = ({textMore='', textBtnMore='', handleFunc=() => {}}) => {
  return (
    <View style={styles.containerMore}>
        <Text style={styles.textMore}>
          {textMore}
        </Text>
        <TouchableOpacity style={styles.btnMore} onPress={handleFunc}>
          <Text style={{...styles.textMore, ...styles.textBtnMore}}>
            {textBtnMore}
          </Text>
        </TouchableOpacity>

      </View>
  )
}

export default More

const styles = StyleSheet.create({
    containerMore: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
      },
      textMore: {
        fontWeght: '400',
        fontSize: 15,
        color: '#212529'
      },
      btnMore: {
    
      },
      textBtnMore: {
        fontWeight: '600',
        fontSize: 18,
        color: '#2E3192'
      },
})