//import liraries
import React, {
    Component,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../../contexts/UserContext";
import * as MediaLibrary from "expo-media-library";

// create a component
const Cam = ({ navigation }) => {
    const [cameraPermission, setCameraPermission] = useState();
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [mediaPermission, setMediaPermission] = useState();
    const cameraRef = useRef();
    const userContext = useContext(UserContext);

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(status.granted);
            const permission = await MediaLibrary.requestPermissionsAsync();
            setMediaPermission(permission.granted);
        })();
    }, []);

    function toggleCam() {
        if (cameraType === Camera.Constants.Type.back) {
            setCameraType(Camera.Constants.Type.front);
        } else {
            setCameraType(Camera.Constants.Type.back);
        }
    }

    const takePicture = async () => {
        const img = await cameraRef.current.takePictureAsync();
        userContext.setUser({
            ...userContext.user,
            avatar: img.uri,
        });

        if (mediaPermission) {
            const savedImage = await MediaLibrary.createAssetAsync(img.uri);
            //await MediaLibrary.saveToLibraryAsync(img.uri);
        }

        navigation.goBack();
    };

    if (!cameraPermission) {
        return <Text>Accès refusé</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={toggleCam}>
                        <MaterialIcons
                            name="flip-camera-android"
                            size={55}
                            color="white"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={takePicture}>
                        <MaterialIcons name="camera" size={55} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2c3e50",
    },
    icons: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 50,
    },
    camera: {
        height: "75%",
        width: "100%",
        flexDirection: "column-reverse",
    },
});

//make this component available to the app
export default Cam;
