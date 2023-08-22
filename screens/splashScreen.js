import React, { useCallback } from "react";
import { SafeAreaView, View, StatusBar, Image, ImageBackground, BackHandler } from "react-native";
import { Colors } from "../constants/styles";
import { useFocusEffect } from "@react-navigation/native";

const SplashScreen = ({ navigation }) => {

    const backAction = () => {
        BackHandler.exitApp();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    setTimeout(() => {
        navigation.push('Onboarding');
    }, 2000);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar translucent={true} backgroundColor='transparent' />
            <ImageBackground
                source={require('../assets/images/bg1.png')}
                style={{ flex: 1, }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0,0,0,0.7)'
                }}>
                    <Image
                        source={require('../assets/images/logo.png')}
                        style={{ width: 120.0, height: 100.0 }}
                        resizeMode="contain"
                    />
                </View>
            </ImageBackground>
        </SafeAreaView >
    )
}

export default SplashScreen;