import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../Stacks/ProfilStack";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Map from "../Map/Map";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator
            screenOptions={{
                header: (navigationProps) => (
                    <NavBar navigation={navigationProps} />
                ),
            }}
        >
            <Drawer.Screen
                name="profilStack"
                component={ProfilStack}
                options={{ title: "Profil" }}
            />
            <Drawer.Screen
                name="map"
                component={Map}
                options={{ title: "Map" }}
            />
        </Drawer.Navigator>
    );
}
