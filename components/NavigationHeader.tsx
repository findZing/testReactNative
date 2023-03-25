import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import back from '../assests/back.png'

const NavigationHeader = ({ title = '', navigation }) => {

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
                <Image source={back} style={{ width: 12, height: 24 }} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View></View>
        </View>
    )
}

export default NavigationHeader

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        width: 44,
        height: 44,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        shadowOffset: { width: -2, height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    title: {
        fontWeight: '600',
        fontSize: 24,
        color: '#212529'
    }
})