//import liraries
import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../../contexts/UserContext";
import Button from "../../ui/Bouton/Button";

// create a component
const Profil = ({ navigation }) => {
    const userContext = useContext(UserContext);

    const openImagePicker = async () => {
        const permission =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            alert("Permission refusée");
        } else {
            const pickedImage = await ImagePicker.launchImageLibraryAsync();
            if (!pickedImage.cancelled) {
                userContext.setUser({
                    ...userContext.user,
                    avatar: pickedImage.uri,
                });
            }
        }
    };

    const openCamera = async () => {
        navigation.push("camera");
    };

    function editInfos() {
        navigation.push("edit");
    }

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: userContext.user.avatar
                            ? userContext.user.avatar
                            : "https://www.bcpr93.fr/wp-content/uploads/2017/06/default-no-profile-pic-1024x1024.jpg",
                    }}
                />
                <View style={styles.icons}>
                    <TouchableOpacity onPress={openImagePicker}>
                        <Entypo name="folder-images" size={24} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={openCamera}>
                        <Entypo name="camera" size={24} color="darkviolet" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.informations}>
                <View style={styles.info}>
                    <Text>{"Votre e-mail: " + userContext.user.email}</Text>
                </View>
                <View style={styles.info}>
                    <Text>
                        {"Votre username: " + userContext.user.username}
                    </Text>
                </View>
                <View style={styles.info}>
                    <Text>
                        {userContext.user.description
                            ? "A propos de vous" + userContext.user.description
                            : "A propos de vous: Ajoutez une description..."}
                    </Text>
                </View>
                <Button label="Modifer vos informations" handle={editInfos} />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: "yellow",
        borderRadius: 75,
        alignSelf: "center",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150,
        alignSelf: "center",
    },
    informations: {
        width: 250,
        alignSelf: "center",
        margin: 25,
        padding: 25,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
    },
    info: {
        paddingVertical: 10,
    },
});

//make this component available to the app
export default Profil;
