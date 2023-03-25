import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ButtonForm = ({ handleFunc = () => { }, text='', color=null||'', icon=null}) => {
    return (
        <TouchableOpacity style={[styles.button, {
            backgroundColor: color ? color :  '#CD2027',
        }]} onPress={handleFunc}>
            {icon && <Image source={icon} style={{width: 24, height: 24}}/>}
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonForm

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 48,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        borderRadius: 12,

    },
    textBtn: {
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '600'
    }
})