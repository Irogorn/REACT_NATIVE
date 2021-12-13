import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserContext } from "./components/contexts/UserContext";
import Auth from "./components/Pages/Auth/Auth";
import Drawer from "./components/Drawers/Drawers";

export default function App() {
    const fakeUser = { email: "toto@toto", username: "toto" };
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    {user ? <Drawer /> : <Auth />}
                </View>
            </NavigationContainer>
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
