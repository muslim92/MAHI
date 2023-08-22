import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {

    const [switchOff, setswitchOff] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {notificationOnOffInfo()}
                {clearCacheTitle()}
                {linkAccountsInfo()}
                {privacyPolicyTitle()}
            </View>
        </SafeAreaView>
    )

    function privacyPolicyTitle() {
        return (
            <Text style={{ ...Fonts.blackColor16SemiBold, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                Privacy Policy
            </Text>
        )
    }

    function linkAccountsInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor16SemiBold }}>
                    Link Accounts
                </Text>
                <Text style={{ ...Fonts.grayColor14SemiBold }}>
                    Facebook ,Google ,Instagram
                </Text>
            </View>
        )
    }

    function clearCacheTitle() {
        return (
            <Text style={{ ...Fonts.blackColor16SemiBold, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                Clear Cache
            </Text>
        )
    }

    function notificationOnOffInfo() {
        return (
            <View style={styles.notificationOnOffInfoWrapStyle}>
                <Text style={{ ...Fonts.blackColor16SemiBold }}>
                    Notifications
                </Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setswitchOff(!switchOff)}
                    style={{
                        backgroundColor: switchOff ? Colors.primaryColor : Colors.grayColor,
                        alignItems: switchOff ? 'flex-end' : 'flex-start',
                        ...styles.switchStyle,
                    }}>
                    <View style={styles.switchInnerCircleStyle} />
                </TouchableOpacity>
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="keyboard-arrow-left" size={40} color="black"
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding + 5.0, ...Fonts.blackColor20Bold }}>
                    Settings
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        height: 56.0,
        alignItems: 'center',
        paddingLeft: Sizes.fixPadding,
        paddingRight: Sizes.fixPadding * 2.0,
    },
    notificationOnOffInfoWrapStyle: {
        flexDirection: 'row',
        margin: Sizes.fixPadding * 2.0,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    switchStyle: {
        width: 26.0,
        height: 17.0,
        borderRadius: 20.0,
        paddingHorizontal: Sizes.fixPadding - 8.0,
        justifyContent: 'center',
    },
    switchInnerCircleStyle: {
        width: 15.0,
        height: 15.0,
        borderRadius: 7.5,
        backgroundColor: Colors.whiteColor
    }
})

export default SettingsScreen;