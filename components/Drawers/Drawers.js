import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfilStack from "../Stacks/ProfilStack";
import React from "react";
import NavBar from "../NavBar/NavBar";
import Map from "../Pages/Map/Map";
import GOT from "../Pages/GOT/GOT";
import Jokes from "../Pages/Jokes/Jokes";

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
            <Drawer.Screen
                name="got"
                component={GOT}
                options={{ title: "Personnage de Game of thrones" }}
            />
            <Drawer.Screen
                name="jokes"
                component={Jokes}
                options={{ title: "Blague naze" }}
            />
        </Drawer.Navigator>
    );
}
