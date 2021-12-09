//import liraries
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

// create a component
const Button = ({ handle, label }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={handle}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    button: {
        backgroundColor: "royalblue",
        padding: 10,
        margin: 10,
        width: "55%",
        borderRadius: 5,
        alignSelf: "center",
    },
    buttonText: {
        color: "whitesmoke",
        textAlign: "center",
    },
});

//make this component available to the app
export default Button;
