import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Dimensions, Image, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const { width } = Dimensions.get('screen');

const SignupScreen = ({ navigation }) => {

    const [state, setState] = useState({
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        fullName,
        email,
        mobileNumber,
        password,
        confirmPassword,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={{ flex: 1 }}
            >
                <View style={styles.headerWrapStyle}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={40}
                        color={Colors.whiteColor}
                        onPress={() => navigation.pop()}
                    />
                    <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.whiteColor20Bold }}>
                        Sign Up
                    </Text>
                </View>
                <View style={{ flex: 1, }}>
                    <ScrollView contentContainerStyle={styles.pageWrapStyle}>
                        <View style={styles.signupInfoWrapStyle}>
                            {fullNameTextField()}
                            {emailTextField()}
                            {mobileNumberTextField()}
                            {passwordTextField()}
                            {confirmPasswordTextField()}
                            {/* {signupWithOptions()} */}
                            {signinText()}
                            {signupButton()}
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

    function signupButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('ProfilePic')}
                style={styles.signupButtonWrapStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    SIGN UP
                </Text>
            </TouchableOpacity>
        )
    }

    function signinText() {
        return (
            <Text style={{ ...Fonts.grayColor14Bold, textAlign: 'center' }}>
                Already have account? {` `}
                <Text
                    onPress={() => navigation.pop()}
                    style={{ ...Fonts.primaryColor14Bold }}
                >
                    Sign In
                </Text>
            </Text>
        )
    }

    function signupWithOptions() {
        return (
            <View style={styles.signupWithOptionsWrapStyle}>
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
                        Signup with facebook
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
                        Signup with Google
                    </Text>
                </View>
            </View>
        )
    }

    function confirmPasswordTextField() {
        return (
            <TextInput
                value={confirmPassword}
                onChangeText={(text) => { updateState({ confirmPassword: text }) }}
                placeholder="Confirm Password"
                style={styles.textFieldWrapStyle}
                selectionColor={Colors.primaryColor}
                secureTextEntry={true}
            />
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

    function mobileNumberTextField() {
        return (
            <TextInput
                value={mobileNumber}
                onChangeText={(text) => { updateState({ mobileNumber: text }) }}
                placeholder="Mobile Number"
                style={styles.textFieldWrapStyle}
                selectionColor={Colors.primaryColor}
                keyboardType="numeric"
            />
        )
    }

    function emailTextField() {
        return (
            <TextInput
                value={email}
                onChangeText={(text) => { updateState({ email: text }) }}
                placeholder="Email Address"
                style={styles.textFieldWrapStyle}
                keyboardType="email-address"
                selectionColor={Colors.primaryColor}
            />
        )
    }

    function fullNameTextField() {
        return (
            <TextInput
                value={fullName}
                onChangeText={(text) => { updateState({ fullName: text }) }}
                placeholder="Full Name"
                style={styles.textFieldWrapStyle}
                selectionColor={Colors.primaryColor}
            />
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding
    },
    pageWrapStyle: {
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: Sizes.fixPadding * 4.0,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    signupInfoWrapStyle: {
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
    signupWithOptionsWrapStyle: {
        marginBottom: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding,
        flexDirection: 'row',
        alignItems: 'center'
    },
    signupButtonWrapStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding + 3.0,
        marginTop: Sizes.fixPadding * 3.0,
        marginBottom: Sizes.fixPadding,
    }
})

export default SignupScreen;