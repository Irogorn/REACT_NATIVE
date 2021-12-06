import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Message(props) {
    return (
        <View style={styles.container}>
            <Text style={[styles.titre, styles.texteStyle]}>{props.title}</Text>
            <Text style={[styles.texte, styles.texteStyle]}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c3e50",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        borderRadius: 5,
        width: Dimensions.get("window").width - 25,
    },
    titre: {
        fontSize: 20,
        fontWeight: "bold",
    },
    texte: {
        fontSize: 15,
    },
    texteStyle: {
        color: "whitesmoke",
    },
});
