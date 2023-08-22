import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Dimensions, TextInput, Image, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const PaymentContinueScreen = ({ navigation }) => {

    const [state, setState] = useState({
        cardholderName: 'Azhar Khan',
        cardNumber: '7654321893526749302',
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        cardholderName,
        cardNumber,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {backArrow()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {paymentMethodInfo()}
                    {amountPayableInfo()}
                    {cardDetailsInfo()}
                    {makePaymentButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function makePaymentButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('PaymentSuccessfull')}
                style={styles.makePaymentButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    Make Payment
                </Text>
            </TouchableOpacity>
        )
    }

    function cardDetailsInfo() {
        return (
            <View style={{
                marginHorizontal: Sizes.fixPadding * 2.0,
                marginVertical: Sizes.fixPadding * 2.0
            }}>
                <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.blackColor15Bold }}>
                    Card Details
                </Text>
                {cardholderNameTextField()}
                {cardNumberTextField()}
            </View>
        )
    }

    function cardNumberTextField() {
        return (
            <TextInput
                value={cardNumber}
                secureTextEntry={true}
                keyboardType="numeric"
                onChangeText={(text) => updateState({ cardNumber: text })}
                selectionColor={Colors.primaryColor}
                style={styles.textFieldStyle}
            />
        )
    }

    function cardholderNameTextField() {
        return (
            <TextInput
                value={cardholderName}
                onChangeText={(text) => updateState({ cardholderName: text })}
                selectionColor={Colors.primaryColor}
                style={styles.textFieldStyle}
            />
        )
    }

    function amountPayableInfo() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={{ ...Fonts.primaryColor18Bold }}>
                    $39.99
                </Text>
                <Text style={{ ...Fonts.grayColor13Regular }}>
                    Amount to be paid via credit card
                </Text>
            </View>
        )
    }

    function paymentMethodInfo() {
        return (
            <View
                style={styles.paymentMethodInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/payment_methods/card.png')}
                    style={{ width: 50.0, height: 20.0, }}
                    resizeMode="contain"
                />
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14Bold }}>
                    Credit Card
                </Text>
            </View>
        )
    }

    function backArrow() {
        return (
            <View style={{ height: 56.0, justifyContent: 'center' }}>
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="black"
                    onPress={() => navigation.pop()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    paymentMethodInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        alignSelf: 'center',
        width: width / 2.5,
        borderRadius: Sizes.fixPadding - 5.0,
        borderColor: '#f7f7f7',
        borderWidth: 1.0,
        elevation: 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginTop: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 3.0,
        paddingVertical: Sizes.fixPadding - 5.0,
    },
    textFieldStyle: {
        ...Fonts.blackColor14Regular,
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        backgroundColor: Colors.bodyBackColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 7.0,
        marginTop: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding,
    },
    makePaymentButtonStyle: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding,
    }
})

export default PaymentContinueScreen;