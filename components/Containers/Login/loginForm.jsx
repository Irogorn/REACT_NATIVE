//import liraries
import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native";
import Button from "../../ui/Bouton/Button";
import Input from "../../ui/Input/Input";
import Error from "../../ui/Error/Error";
import Message from "../../ui/Message/message";

// create a component
const LoginForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function handleEmail(event) {
        setEmailInput(event);
    }

    function handlePassWord(event) {
        setPasswordInput(event);
    }

    function login() {
        setEmailError("");
        setPasswordError("");
        if (emailInput.includes("@") && passwordInput.length > 6) {
            alert("Email: " + emailError + ". Connection avec succès !");
        } else {
            if (!emailInput.includes("@")) {
                setEmailError("Forme de l'email incorrecte");
            }
            setPasswordError(
                passwordInput.length < 6
                    ? "Mot de passe trop court. Au moins 6 caractères !"
                    : ""
            );
        }
    }

    return (
        <View style={styles.container}>
            <Message title="Bienvenue" text="Veuillez vous identifiez." />
            <View>
                <Input
                    placeholder="Email"
                    handle={handleEmail}
                    value={emailInput}
                    isPassWord={false}
                />
                <Error error={emailError} />

                <Input
                    placeholder="PassWord"
                    handle={handlePassWord}
                    value={passwordInput}
                    isPassWord={true}
                />
                <Error error={passwordError} />

                <Button label="Sign In" handle={login} />
            </View>
        </View>
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
    button: {
        backgroundColor: "royalblue",
        padding: 10,
        margin: 10,
        width: "50%",
        borderRadius: 5,
        alignSelf: "center",
    },
    buttonText: {
        color: "whitesmoke",
        textAlign: "center",
    },
});

//make this component available to the app
export default LoginForm;
