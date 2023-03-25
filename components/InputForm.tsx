import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import React from 'react'

const InputForm = ({placeholder='', icon = null}) => {
  return (
    <View style={styles.container}>
        {icon && <Image source={icon} style={styles.icon}/>}
        <TextInput placeholder={placeholder} style={styles.input}/>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        height: 48,
        width: '100%',
        paddingLeft: 16,
        paddingHorizontal: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    input: {
        flex: 1,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        color: '#868E96'
    },
    icon: {
        width: 24,
        height: 24,
    }
})