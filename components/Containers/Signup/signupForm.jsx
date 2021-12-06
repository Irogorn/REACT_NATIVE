//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../ui/Bouton/Button";
import Input from "../../ui/Input/Input";
import Error from "../../ui/Error/Error";

// create a component
const SignUpForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confPasswordInput, setConfPasswordInput] = useState("");
    const [emailError, setEmailError] = useState("");
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confPassWordError, setConfPassWordError] = useState("");

    function handleEmail(event) {
        setEmailInput(event);
    }

    function handleUserName(event) {
        setUserInput(event);
    }

    function handlePassWord(event) {
        setPasswordInput(event);
    }

    function handleConfPassWord(event) {
        setConfPasswordInput(event);
    }

    function subcribed() {
        setEmailError("");
        setUserError("");
        setPasswordError("");
        setConfPassWordError("");

        if (
            emailInput.includes("@") &&
            passwordInput.length >= 6 &&
            confPasswordInput === passwordInput &&
            (userInput.length >= 3 || userInput.length <= 20)
        ) {
            alert("Inscris avec succès !");
        } else {
            if (!emailInput.includes("@")) {
                setEmailError("Forme de l'email incorrecte");
            }
            if (userInput.length < 3 || userInput.length > 20) {
                setUserError(
                    "UserName doit être compris entre 3 à 20 caractères !"
                );
            }
            setPasswordError(
                passwordInput.length < 6
                    ? "Mot de passe trop court. Au moins 6 caractères !"
                    : ""
            );

            setConfPassWordError(
                confPasswordInput !== passwordInput
                    ? "Le mot de passe de confirmation est différent du champ password !"
                    : ""
            );
        }
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="EMAIL"
                value={emailInput}
                isPassWord={false}
                handle={handleEmail}
            />
            <Error error={emailError} />
            <Input
                placeholder="USERNAME"
                value={userInput}
                isPassWord={false}
                handle={handleUserName}
            />
            <Error error={userError} />
            <Input
                placeholder="PASSWORD"
                value={passwordInput}
                isPassWord={true}
                handle={handlePassWord}
            />
            <Error error={passwordError} />
            <Input
                placeholder="CONFIRM PASSWORD"
                value={confPasswordInput}
                isPassWord={true}
                handle={handleConfPassWord}
            />
            <Error error={confPassWordError} />
            <Button handle={subcribed} label="Subcribe" />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
});

//make this component available to the app
export default SignUpForm;
