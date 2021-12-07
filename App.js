import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { UserContext } from "./components/contexts/UserContext";
import Auth from "./components/Pages/Auth/Auth";
import ProfilStack from "./components/Stacks/ProfilStack";

export default function App() {
    const fakeUser = { email: "toto@toto", username: "toto" };
    const [user, setUser] = useState(fakeUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <NavigationContainer>
                <View style={styles.container}>
                    <StatusBar style="auto" />
                    {user ? <ProfilStack /> : <Auth />}
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
