import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, Dimensions, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Overlay } from "@rneui/themed";

const { width } = Dimensions.get('screen');

const ProfileScreen = ({ navigation }) => {

    const [showLogoutDialog, setshowLogoutDialog] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            {header()}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 5.0 }}
            >
                {profileInfo()}
                {profileSettings()}
                {logoutInfo()}
                {logoutDialog()}
            </ScrollView>
        </SafeAreaView>
    )

    function logoutDialog() {
        return (
            <Overlay
                visible={showLogoutDialog}
                overlayStyle={styles.dialogContainerStyle}
                onBackdropPress={() => { setshowLogoutDialog(false) }}
            >
                <View style={styles.dialogContentStyle}>
                    <Text style={{ ...Fonts.blackColor16SemiBold, }}>
                        Sure you want to logout?
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding * 3.0, flexDirection: 'row', alignItems: 'center', }}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => setshowLogoutDialog(false)}
                            style={{
                                ...styles.cancelAndLogoutButtonStyle,
                                marginRight: Sizes.fixPadding,
                            }}>
                            <Text style={{ ...Fonts.primaryColor15Bold }}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => {
                                setshowLogoutDialog(false)
                                navigation.push('Signin')
                            }}
                            style={{
                                ...styles.cancelAndLogoutButtonStyle,
                                marginLeft: Sizes.fixPadding,
                                backgroundColor: Colors.primaryColor,
                            }}>
                            <Text style={{ ...Fonts.whiteColor15Bold }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Overlay>
        )
    }

    function logoutInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setshowLogoutDialog(true)}
                style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}
            >
                <Image
                    source={require('../../assets/images/icons/selectedlogout.png')}
                    style={{ width: 22.0, height: 22.0 }}
                    resizeMode="contain"
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 10.0, ...Fonts.primaryColor16SemiBold }}>
                    Logout
                </Text>
            </TouchableOpacity>
        )
    }

    function profileSettings() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.0, }}>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('Settings')}
                >
                    {settingsOptions(
                        {
                            title: 'Settings',
                            image: require('../../assets/images/icons/setting.png')
                        }
                    )}
                </TouchableOpacity>
                {settingsOptions(
                    {
                        title: 'Terms & Conditions',
                        image: require('../../assets/images/icons/condition.png')
                    }
                )}
            </View>
        )
    }

    function settingsOptions({ title, image }) {
        return (
            <View style={{ marginBottom: Sizes.fixPadding + 10.0, marginRight: Sizes.fixPadding + 5.0, marginLeft: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={image}
                        style={{ width: 22.0, height: 22.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ marginLeft: Sizes.fixPadding + 10.0, ...Fonts.blackColor16SemiBold }}>
                        {title}
                    </Text>
                </View>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={25}
                    color={Colors.blackColor}
                />
            </View>
        )
    }

    function profileInfo() {
        return (
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.push('ProfileDetail')}
                style={styles.profileInfoWrapStyle}
            >
                <View style={{ flexDirection: 'row', }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 100.0, height: 100.0, borderRadius: Sizes.fixPadding - 5.0, }}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding + 5.0, }}>
                        <Text style={{ ...Fonts.blackColor17Bold }}>
                            Azhar Khan
                        </Text>
                        <Text style={{ ...Fonts.grayColor14SemiBold }}>
                            LV-651232
                        </Text>
                    </View>
                </View>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={35}
                    color={Colors.grayColor}
                />
            </TouchableOpacity>
        )
    }

    function header() {
        return (
            <View style={{ height: 56.0, justifyContent: 'center', paddingHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor20Bold }}>
                    Profile
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    profileInfoWrapStyle: {
        marginVertical: Sizes.fixPadding + 5.0,
        marginRight: Sizes.fixPadding,
        marginLeft: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dialogContainerStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        width: width - 90,
        padding: 0.0,
    },
    dialogContentStyle: {
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        borderRadius: Sizes.fixPadding - 5.0
    },
    cancelAndLogoutButtonStyle: {
        flex: 1,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding - 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
    }
})

export default ProfileScreen;