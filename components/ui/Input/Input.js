//import liraries
import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

// create a component
const Input = ({ placeholder, handle, value, isPassWord }) => {
    const [showPassWord, setShowPassWord] = useState(true);

    function toggleShowPassWord() {
        setShowPassWord(!showPassWord);
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="gray"
                style={styles.input}
                onChangeText={handle}
                value={value}
                secureTextEntry={showPassWord}
            />
            {isPassWord && (
                <Feather
                    style={styles.icon}
                    name={showPassWord ? "eye-off" : "eye"}
                    size={20}
                    color={showPassWord ? "green" : "red"}
                    onPress={toggleShowPassWord}
                />
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#bbb",
        borderRadius: 5,
        margin: 10,
    },
    input: {
        padding: 10,
        flex: 2,
    },
    icon: {
        margin: "auto",
        padding: 5,
    },
});

//make this component available to the app
export default Input;
