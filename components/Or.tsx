import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Or = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line} />
            <Text style={{
                fontWeight: '400',
                fontSize: 15,
                color: '#495057',
            }}>Hoặc</Text>
            <View style={styles.line} />
        </View>
    )
}

export default Or

const styles = StyleSheet.create({
    container: {
        width: 295,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        height: 1,
        width: '40%',
        backgroundColor: '#C5CEE0'
    }
})