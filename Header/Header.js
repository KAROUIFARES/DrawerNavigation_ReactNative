import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const Header = ({ navigation }) =>
{
    const openMenu = () =>
    {
        navigation.openDrawer();
    }
    return (
        <TouchableOpacity style={styles.icons} onPress={openMenu}>
            <Ionicons name="md-menu" size={28} color="black"></Ionicons>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    header: {
        marginTop: 26,
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center"
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "#000",
        letterSpacing: 1
    },
    icons: {
        position: 'absolute',
        left: 16,
        top: 15
    }
})

export default Header;