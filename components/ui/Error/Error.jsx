//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const Error = ({ error }) => {
    return <Text style={styles.text}>{error}</Text>;
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    text: {
        color: "red",
    },
});

//make this component available to the app
export default Error;
