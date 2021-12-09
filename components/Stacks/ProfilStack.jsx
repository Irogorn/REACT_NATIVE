import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Profil from "../Pages/Profil/Profil";
import Cam from "../Pages/Cam/Cam";
import EditProfil from "../Pages/EditProfil/EditProfil";

const Stack = createStackNavigator();
export default function ProfilStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: "red" },
                headerTitleStyle: {
                    color: "whitesmoke",
                    fontWeight: "bold",
                },
                headerTintColor: "whitesmoke",
            }}
        >
            <Stack.Screen
                name="profil"
                component={Profil}
                options={{ title: "Page de votre profil", headerShown: false }}
            />
            <Stack.Screen
                name="camera"
                component={Cam}
                options={{ title: "Caméra" }}
            />
            <Stack.Screen
                name="edit"
                component={EditProfil}
                options={{ title: "Edition du profil" }}
            />
        </Stack.Navigator>
    );
}
