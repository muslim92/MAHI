import React, { useState, useCallback } from "react";
import { SafeAreaView, View, BackHandler, Dimensions, StatusBar, TextInput, TouchableOpacity, Image, ImageBackground, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from "@react-navigation/native";

const { width } = Dimensions.get('screen');

const SigninScreen = ({ navigation }) => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        userName: '',
        password: '',
        backClickCount: 0
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        userName,
        password,
        backClickCount,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar translucent={false} backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={{ flex: 1 }}
            >
                <Text style={{ margin: Sizes.fixPadding * 2.0, ...Fonts.whiteColor20Bold }}>
                    Sign In
                </Text>
                <View style={{ flex: 1, }}>
                    <ScrollView contentContainerStyle={styles.pageWrapStyle}>
                        <View style={styles.signinInfoWrapStyle}>
                            {userNameTextField()}
                            {passwordTextField()}
                            {forgotPasswordText()}
                            {/* {signinWithOptions()} */}
                            {signupText()}
                            {signinButton()}
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor13Regular }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </SafeAreaView>
    )

    function signinButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('Signup')}
                style={styles.signinButtonWrapStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    SIGN IN
                </Text>
            </TouchableOpacity>
        )
    }

    function signupText() {
        return (
            <Text style={{ ...Fonts.grayColor14Bold, textAlign: 'center' }}>
                Don't have account? {` `}
                <Text
                    onPress={() => navigation.push('Signup')}
                    style={{ ...Fonts.primaryColor14Bold }}
                >
                    Sign Up
                </Text>
            </Text>
        )
    }

    function signinWithOptions() {
        return (
            <View style={styles.signinWithOptionsWrapStyle}>
                <View style={{
                    ...styles.googleFacebookButtonWrapStyle,
                    backgroundColor: '#4267B2',
                    marginRight: Sizes.fixPadding,
                }}>
                    <Image
                        source={require('../../assets/images/icons/facebook.png')}
                        style={{ width: 15.0, height: 15.0, }}
                        resizeMode="contain"
                    />
                    <Text numberOfLines={1} style={{ maxWidth: width / 3.7, marginLeft: Sizes.fixPadding - 8.0, ...Fonts.whiteColor12SemiBold }}>
                        SignIn with facebook
                    </Text>
                </View>
                <View style={{
                    ...styles.googleFacebookButtonWrapStyle,
                    backgroundColor: '#EA4335',
                    marginLeft: Sizes.fixPadding,
                }}>
                    <Image
                        source={require('../../assets/images/icons/google.png')}
                        style={{ width: 15.0, height: 15.0, }}
                        resizeMode="contain"
                    />
                    <Text numberOfLines={1} style={{ maxWidth: width / 3.7, marginLeft: Sizes.fixPadding - 5.0, ...Fonts.whiteColor12SemiBold }}>
                        SignIn with Google
                    </Text>
                </View>
            </View>
        )
    }

    function forgotPasswordText() {
        return (
            <Text style={{
                marginTop: Sizes.fixPadding - 17.0,
                textAlign: 'right',
                ...Fonts.grayColor13SemiBold,
            }}>
                Forget password?
            </Text>
        )
    }

    function passwordTextField() {
        return (
            <TextInput
                value={password}
                onChangeText={(text) => { updateState({ password: text }) }}
                placeholder="Password"
                style={styles.textFieldWrapStyle}
                selectionColor={Colors.primaryColor}
                secureTextEntry={true}
            />
        )
    }

    function userNameTextField() {
        return (
            <TextInput
                value={userName}
                onChangeText={(text) => { updateState({ userName: text }) }}
                placeholder="User Name"
                style={styles.textFieldWrapStyle}
                selectionColor={Colors.primaryColor}
            />
        )
    }
}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    pageWrapStyle: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: Sizes.fixPadding * 4.0,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    signinInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
    },
    textFieldWrapStyle: {
        ...Fonts.blackColor15SemiBold,
        borderColor: '#ececec',
        elevation: 3.0,
        borderWidth: 1.0,
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        height: 45.0,
    },
    googleFacebookButtonWrapStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding,
    },
    signinWithOptionsWrapStyle: {
        marginBottom: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding + 10.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    signinButtonWrapStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding + 3.0,
        marginTop: Sizes.fixPadding * 3.0,
        marginBottom: Sizes.fixPadding,
    }
})

export default SigninScreen;