//import liraries
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native";

// create a component
const GOT = () => {
    const [gotPersos, setGotPersos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://thronesapi.com/api/v2/Characters")
            .then((resp) => {
                setGotPersos(resp.data);
                setIsLoading(false);
            })
            .catch((error) => {
                alert(error.message);
                setIsLoading(false);
            });
    }, []);

    function searchPerso(nom) {
        WebBrowser.openBrowserAsync("https://www.google.fr/search?q=" + nom);
    }

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator
                    style={styles.indicator}
                    size="large"
                    color="green"
                />
            ) : (
                <ScrollView style={styles.container}>
                    {gotPersos.map((element) => {
                        return (
                            <TouchableOpacity
                                onPress={() => {
                                    searchPerso(element.fullName);
                                }}
                            >
                                <View style={styles.card} key={element.id}>
                                    <Text style={styles.fullname}>
                                        {element.fullName}
                                    </Text>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: element.imageUrl }}
                                    ></Image>
                                    <Text style={styles.title}>
                                        {element.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c3e50",
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
        alignSelf: "center",
    },
    card: {
        marginVertical: 50,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "whitesmoke",
        padding: 25,
        borderRadius: 15,
        width: 300,
        alignSelf: "center",
    },
    fullname: {
        color: "whitesmoke",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    title: {
        color: "whitesmoke",
        fontSize: 25,
        textAlign: "center",
    },
    indicator: {
        marginTop: 50,
    },
});

//make this component available to the app
export default GOT;
