import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../Header/Header'

export default function Contact({ navigation })
{
    return (
        <View style={styles.container}>
            <Header navigation={navigation}></Header>
            <View style={styles.content}>
                <Text style={styles.text}>Contact Screen</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aqua'
    },
    text: {
        fontSize: 24,
        color: '#ffffff',
        fontWeight: '900'
    }
})