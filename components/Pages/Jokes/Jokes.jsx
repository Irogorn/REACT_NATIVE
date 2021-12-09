//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

// create a component
const Jokes = () => {
    const [joke, setJoke] = useState("");
    const [answer, setAnswer] = useState("");
    const [show, setShow] = useState(false);
    const [next, setNext] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    function fnext() {
        setNext(!next);
    }

    function toogle() {
        setShow(!show);
    }

    useEffect(() => {
        axios
            .get("https://blague.xyz/api/joke/random")
            .then((resp) => {
                console.log(resp);
                setJoke(resp.data.joke.question);
                setAnswer(resp.data.joke.answer);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
        return () => {
            setShow(falses);
        };
    }, [next]);
    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="green" />
            ) : (
                <View>
                    <Text style={styles.champ}>{joke}</Text>
                    {show && <Text style={styles.champ}>{answer}</Text>}
                    <View style={styles.groupebutton}>
                        <TouchableOpacity style={styles.button} onPress={fnext}>
                            <Text style={styles.text}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={toogle}
                        >
                            <Text style={styles.text}>Display</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {},
    button: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "gray",
        alignSelf: "center",
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: "blue",
        marginLeft: 10,
    },
    text: {
        color: "whitesmoke",
    },
    champ: {
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "gray",
        margin: 20,
        padding: 10,
        alignSelf: "center",
        backgroundColor: "orange",
    },
    groupebutton: {
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
    },
});

//make this component available to the app
export default Jokes;
