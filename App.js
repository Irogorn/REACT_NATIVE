import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Auth from "./components/Pages/Auth/Auth";
import Profil from "./components/Pages/Profil/Profil";

export default function App() {
    const user = null;
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            {user ? <Profil /> : <Auth />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
