//import liraries
import React, { Component, useContext, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { UserContext } from "../../contexts/UserContext";
import Button from "../../ui/Bouton/Button";

// create a component
const EditProfil = ({ navigation }) => {
    const userContext = useContext(UserContext);
    const [courriel, setCourriel] = useState(userContext.user.email);
    const [courrielErr, setCourrielErr] = useState("");
    const [username, setUserName] = useState(userContext.user.username);
    const [description, setDescription] = useState(
        userContext.user.description
    );

    function validate() {
        setCourrielErr("");
        if (!courriel.includes("@")) {
            setCourrielErr("Format non valide !");
            return;
        }
        if (username.length < 6) {
            setCourrielErr("Format non valide !");
            return;
        }
        userContext.setUser({
            ...userContext.user,
            email: courriel,
            username: username,
            description: description,
        });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.champ, styles.nomultiline]}
                placeholder="Courriel"
                value={courriel}
                onChangeText={setCourriel}
            />
            <Text style={styles.text}>{courrielErr}</Text>
            <TextInput
                style={[styles.champ, styles.nomultiline]}
                placeholder="Nom d'utilisateur"
                value={username}
                onChangeText={setUserName}
            />
            <TextInput
                style={[styles.champ, styles.multiline]}
                placeholder="Votre description"
                multiline={true}
                numberOfLines={5}
                maxLength={150}
                value={description}
                onChangeText={setDescription}
            />
            <Button label="Valider" handle={validate} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: "lightseagreen",
        borderRadius: 15,
        padding: 30,
        margin: 10,
        backgroundColor: "beige",
    },
    champ: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginVertical: 5,
        padding: 10,
        backgroundColor: "white",
    },
    nomultiline: {
        height: 50,
    },
    multiline: {
        textAlignVertical: "top",
    },
    text: {
        color: "red",
        fontWeight: "bold",
        paddingLeft: 10,
        paddingRight: 10,
    },
});

//make this component available to the app
export default EditProfil;
