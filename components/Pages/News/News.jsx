//import liraries
import axios from "axios";
import React, { Component, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
} from "react-native";
import Button from "../../ui/Bouton/Button";
import { Picker } from "@react-native-picker/picker";

// create a component
const News = () => {
    const [news, setNews] = useState([]);
    const [what, setWhat] = useState("");
    const [lang, setLang] = useState("fr");

    const key = "Put here your token got on NewsAPI";

    function search() {
        axios
            .get(
                `https://newsapi.org/v2/everything?q=${what}&apiKey=${key}&language=${lang}`
            )
            .then((resp) => {
                // console.log(resp);
                console.log(resp.data.articles);
                setNews(resp.data.articles);
            })
            .catch((error) => {
                alert("Problème de TOKEN!");
                return;
            });
    }

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="word"
                value={what}
                onChangeText={setWhat}
            />
            <View style={styles.cadre}>
                <Picker
                    style={styles.combo}
                    selectedValue={lang}
                    onValueChange={(itemValue, itemIndex) => setLang(itemValue)}
                >
                    <Picker.Item label="Français" value="fr" />

                    <Picker.Item label="English" value="en" />

                    <Picker.Item label="Deutch" value="de" />
                </Picker>
            </View>

            <Button style={styles.button} label="Go !" handle={search} />
            {news.map((n) => {
                return (
                    <View style={styles.card} key={n.url}>
                        <Text style={styles.title}>{n.title}</Text>
                        <Text style={styles.description}>{n.description}</Text>
                        <Image
                            style={styles.image}
                            source={{ uri: n.urlToImage }}
                        ></Image>
                    </View>
                );
            })}
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "gray",
    },
    card: {
        marginVertical: 55,
        borderWidth: 2,
        borderColor: "whitesmoke",
        padding: 20,
        width: 300,
        alignSelf: "center",
        borderRadius: 20,
    },
    input: {
        backgroundColor: "whitesmoke",
        borderWidth: 1,
        borderColor: "red",
        alignSelf: "center",
        margin: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: "center",
    },
    title: {
        fontWeight: "bold",
        color: "whitesmoke",
        fontSize: 25,
        paddingBottom: 20,
    },
    description: {
        color: "whitesmoke",
        fontSize: 20,
        paddingBottom: 20,
    },
    combo: {
        backgroundColor: "whitesmoke",
    },
    cadre: {
        margin: 20,
        borderWidth: 3,
        borderColor: "green",
    },
});

//make this component available to the app
export default News;
