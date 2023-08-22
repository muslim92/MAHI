import React, { useCallback } from "react";
import { SafeAreaView, BackHandler, StatusBar, View, Image, Text, StyleSheet, ImageBackground } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from "@react-navigation/native";

const PaymentSuccessfullScreen = ({ navigation }) => {

    const backAction = () => {
        navigation.push('BottomTabBar');
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    setTimeout(() => {
        navigation.push('BottomTabBar');
    }, 2000);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={{ flex: 1 }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {giftImage()}
                    {congratsText()}
                    {receiptTitle()}
                    {smsAndMailInfo()}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

    function receiptTitle() {
        return (
            <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.whiteColor15Bold }}>
                Receipt
            </Text>
        )
    }

    function congratsText() {
        return (
            <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.whiteColor13Regular, textAlign: 'center' }}>
                {`Congratulations payment successfully paid\nNow, You are a subscribes user`}
            </Text>
        )
    }

    function giftImage() {
        return (
            <Image
                source={require('../../assets/images/gift.png')}
                style={{ width: 150.0, height: 150.0, }}
            />
        )
    }

    function smsAndMailInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding - 7.0, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginRight: Sizes.fixPadding + 3.0, }}>
                    <View style={styles.smsAndMailWrapStyle}>
                        <Image
                            source={require('../../assets/images/icons/whitesms.png')}
                            style={{ width: 15.0, height: 15.0, }}
                            resizeMode="contain"
                        />
                    </View>
                    <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                        SMS
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.smsAndMailWrapStyle}>
                        <MaterialIcons name="mail" size={15} color={Colors.whiteColor} />
                    </View>
                    <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                        MAIL
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    smsAndMailWrapStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 27.0,
        height: 27.0,
        borderRadius: 13.5,
        borderColor: Colors.whiteColor,
        borderWidth: 1.0,
    }
})

export default PaymentSuccessfullScreen;