//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import LoginFormik from "../../Containers/Login/loginFormik";
import SignUpForm from "../../Containers/Signup/signupForm";

// create a component
const Auth = () => {
    const [isLogin, setLogin] = useState(true);

    function toggleLogin() {
        setLogin((isLogin) => !isLogin);
    }

    return (
        <View style={styles.container}>
            {isLogin ? <LoginFormik /> : <SignUpForm />}
            <TouchableOpacity onPress={toggleLogin}>
                <Text>
                    {isLogin
                        ? "Vous n'êtes pas encore inscrit ?"
                        : "Déjà inscrit ? Connectez-vous !"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default Auth;
