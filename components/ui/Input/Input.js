//import liraries
import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";

// create a component
const Input = ({ placeholder, handle, value, isPassWord }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor="gray"
            style={styles.input}
            onChangeText={handle}
            value={value}
            secureTextEntry={isPassWord}
        />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    input: {
        margin: 10,
        padding: 10,
        backgroundColor: "#bbb",
        borderRadius: 5,
    },
});

//make this component available to the app
export default Input;
