//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

// create a component
const NavBar = ({ navigation }) => {
    function openMenu() {
        navigation.navigation.openDrawer();
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openMenu} style={styles.buttonMenu}>
                <AntDesign name="menu-fold" size={25} color="whitesmoke" />
            </TouchableOpacity>
            <Text style={styles.title}>{navigation.options.title}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
        flexDirection: "row",
    },
    title: {
        flex: 2,
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonMenu: {
        paddingLeft: 10,
    },
});

//make this component available to the app
export default NavBar;
