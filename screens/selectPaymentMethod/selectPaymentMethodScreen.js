import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, TouchableOpacity, FlatList, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const paymentMethodsList = [
    {
        id: '1',
        paymentMethod: 'Credit / Debit Card',
        image: require('../../assets/images/payment_methods/card.png'),
    },
    {
        id: '2',
        paymentMethod: 'Paypal Money',
        image: require('../../assets/images/payment_methods/paypal.png'),
    },
    {
        id: '3',
        paymentMethod: 'PayU Money',
        image: require('../../assets/images/payment_methods/payU.png'),
    },
    {
        id: '4',
        paymentMethod: 'Wallet',
        image: require('../../assets/images/payment_methods/wallet.png'),
    }
];

const SelectPaymentMethodScreen = ({ navigation }) => {

    const [state, setState] = useState({
        currentPaymentMethod: paymentMethodsList[0].id,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentPaymentMethod
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {paymentMethods()}
                {addNewMethodButton()}
                {continueButton()}
            </View>
        </SafeAreaView>
    )

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('PaymentContinue')}
                style={styles.continueButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function addNewMethodButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('AddNewMethod')}
                style={styles.addNewMethodButtonStyle}
            >
                <Text style={{ ...Fonts.primaryColor17Bold }}>
                    Add New Method
                </Text>
            </TouchableOpacity>
        )
    }

    function paymentMethods() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ currentPaymentMethod: item.id })}
                style={{
                    ...styles.paymentMethodWrapStyle,
                    backgroundColor: currentPaymentMethod == item.id ? '#F5F5F5' : Colors.whiteColor,
                }}>
                <Image
                    source={item.image}
                    style={{ width: 50.0, height: 20.0, }}
                    resizeMode="contain"
                />
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14Bold }}>
                    {item.paymentMethod}
                </Text>
            </TouchableOpacity>
        )
        return (
            <View>
                <FlatList
                    data={paymentMethodsList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: Sizes.fixPadding - 5.0,
                        paddingTop: Sizes.fixPadding * 2.0
                    }}
                />
            </View>
        )
    }

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color="black"
                    onPress={() => navigation.pop()}
                />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor20Bold }}>
                    Select Payment Method
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
        paddingHorizontal: Sizes.fixPadding
    },
    paymentMethodWrapStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        flex: 1,
        borderColor: '#f7f7f7',
        borderWidth: 1.0,
        elevation: 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
        paddingTop: Sizes.fixPadding - 5.0,
        paddingBottom: Sizes.fixPadding * 2.0,
    },
    addNewMethodButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 2.0,
        margin: Sizes.fixPadding * 2.0,
    },
    continueButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding * 2.0,
    }
})

export default SelectPaymentMethodScreen;