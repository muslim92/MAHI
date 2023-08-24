import React, { useState } from "react";
import { SafeAreaView, Dimensions, StatusBar, Image, ScrollView, TextInput, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomSheet } from "@rneui/themed";

const { width } = Dimensions.get('screen');

const emailAddressesList = [
    {
        id: '1',
        email: 'paypalmydomain@gmail.com',
    },
    {
        id: '2',
        email: 'salesmydomain@gmail.com',
    }
];

const cardTypesList = [
    {
        id: '1',
        image: require('../../assets/images/payment_methods/visa.png'),
        type: 'Visa card',
    },
    {
        id: '2',
        image: require('../../assets/images/payment_methods/master_card.png'),
        type: 'Master card',
    },
    {
        id: '3',
        image: require('../../assets/images/payment_methods/credit_card.png'),
        type: 'Credit card',
    }
];

const AddNewMethodScreen = ({ navigation }) => {

    const [state, setState] = useState({
        currentAddingInfoIndex: 1,
        cardholderName: 'Azhar Khan',
        cardNumber: '7654321893526749302',
        validThru: '08/24',
        cvv: '3452',
        currentEmail: emailAddressesList[0].email,
        nameOfBeneficiary: '',
        nameOfBank: '',
        accountNumber: '',
        ifscCode: '',
        showSelectCarTypeSheet: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentAddingInfoIndex,
        cardholderName,
        cardNumber,
        validThru,
        cvv,
        currentEmail,
        nameOfBeneficiary,
        nameOfBank,
        accountNumber,
        ifscCode,
        showSelectCarTypeSheet,
    } =  state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {addingInfo()}
                    {state.currentAddingInfoIndex == 1
                        ?
                        <>
                            {cardInfo()}
                            {selectCardTypeBottomSheet()}
                        </>
                        :
                        currentAddingInfoIndex == 2
                            ?
                            emailInfo()
                            :
                            bankingInfo()
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function selectCardTypeBottomSheet() {
        return (
            <BottomSheet
                isVisible={showSelectCarTypeSheet}
                containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                onBackdropPress={() => updateState({ showSelectCarTypeSheet: false })}
            >
                <View style={{ paddingVertical: Sizes.fixPadding, paddingHorizontal: Sizes.fixPadding * 2.0, backgroundColor: Colors.whiteColor }}>
                    <Text style={{ marginVertical: Sizes.fixPadding, alignSelf: 'center', ...Fonts.blackColor17SemiBold }}>
                        Choose Card Type
                    </Text>
                    {
                        cardTypesList.map((item) => (
                            <View key={`${item.id}`}>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => updateState({ showSelectCarTypeSheet: false })}
                                    style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{ width: 20.0, height: 20.0, }}
                                        resizeMode="contain"
                                    />
                                    <Text style={{ marginLeft: Sizes.fixPadding + 2.0, ...Fonts.blackColor15SemiBold }}>
                                        {item.type}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </View>
            </BottomSheet>
        )
    }

    function bankingInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {nameOfBeneficiaryInfo()}
                {nameOfBankInfo()}
                {accountNumberInfo()}
                {ifscCodeInfo()}
                {addButton()}
            </View>
        )
    }

    function ifscCodeInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    IFSC Code
                </Text>
                <TextInput
                    value={ifscCode}
                    onChangeText={(text) => updateState({ ifscCode: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function accountNumberInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Account Number
                </Text>
                <TextInput
                    value={accountNumber}
                    keyboardType="numeric"
                    onChangeText={(text) => updateState({ accountNumber: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function nameOfBankInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Name of Bank
                </Text>
                <TextInput
                    value={nameOfBank}
                    onChangeText={(text) => updateState({ nameOfBank: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function nameOfBeneficiaryInfo() {
        return (
            <View>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Name of Beneficiary
                </Text>
                <TextInput
                    value={nameOfBeneficiary}
                    onChangeText={(text) => updateState({ nameOfBeneficiary: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function emailInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Enter New Paypal Email Address
                </Text>
                {
                    emailAddressesList.map((item, index) => (
                        <View key={`${item.id}`}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => updateState({ currentEmail: item.email })}
                                style={{
                                    ...styles.emailWrapStyle,
                                    marginBottom: emailAddressesList.length - 1 == index ? 0.0 : Sizes.fixPadding,
                                }}>
                                <Text style={{ ...Fonts.blackColor14Regular }}>
                                    {item.email}
                                </Text>
                                <View
                                    style={{
                                        width: 10.0,
                                        height: 10.0,
                                        borderRadius: 5.0,
                                        backgroundColor: currentEmail == item.email ? Colors.blackColor : '#DFDFDF'
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    ))
                }
                {addButton()}
            </View>
        )
    }

    function cardInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                {cardholderInfo()}
                {cardNumberInfo()}
                {scanCardButton()}
                {validThruAndCvvInfo()}
                {addButton()}
            </View>
        )
    }

    function addButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.pop()}
                style={styles.addButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    Add
                </Text>
            </TouchableOpacity>
        )
    }

    function validThruAndCvvInfo() {
        return (
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flex: 1, marginRight: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Valid Thru
                    </Text>
                    <TextInput
                        value={validThru}
                        onChangeText={(text) => updateState({ validThru: text })}
                        selectionColor={Colors.primaryColor}
                        style={styles.textFieldStyle}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        CVV
                    </Text>
                    <TextInput
                        secureTextEntry={true}
                        keyboardType="numeric"
                        value={cvv}
                        onChangeText={(text) => updateState({ cvv: text })}
                        selectionColor={Colors.primaryColor}
                        style={styles.textFieldStyle}
                    />
                </View>
            </View>
        )
    }

    function scanCardButton() {
        return (
            <View style={styles.scanCardButtonStyle}>
                <MaterialCommunityIcons name="credit-card-scan" size={20} color={Colors.whiteColor} />
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.whiteColor14Bold }}>
                    Scan Card
                </Text>
            </View>
        )
    }

    function cardNumberInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding + 5.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Card Number
                </Text>
                <TextInput
                    value={cardNumber}
                    secureTextEntry={true}
                    keyboardType="numeric"
                    onChangeText={(text) => updateState({ cardNumber: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function cardholderInfo() {
        return (
            <View>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Cardholder Name
                </Text>
                <TextInput
                    value={cardholderName}
                    onChangeText={(text) => updateState({ cardholderName: text })}
                    selectionColor={Colors.primaryColor}
                    style={styles.textFieldStyle}
                />
            </View>
        )
    }

    function addingInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding * 2.0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ currentAddingInfoIndex: 1, showSelectCarTypeSheet: true })}
                        style={{
                            backgroundColor: currentAddingInfoIndex == 1 ? '#F5F5F5' : Colors.whiteColor,
                            ...styles.addingInfoWrapStyle,
                            flex: 1,
                        }}>
                        <Image
                            source={require('../../assets/images/payment_methods/card.png')}
                            style={{ width: 50.0, height: 20.0, }}
                            resizeMode="contain"
                        />
                        <View style={{ marginTop: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ marginRight: Sizes.fixPadding - 3.0, ...Fonts.blackColor14Bold }}>
                                Add New Card
                            </Text>
                            <MaterialIcons
                                name="keyboard-arrow-down"
                                size={22}
                                color="black"
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => updateState({ currentAddingInfoIndex: 2 })}
                        style={{
                            backgroundColor: currentAddingInfoIndex == 2 ? '#F5F5F5' : Colors.whiteColor,
                            ...styles.addingInfoWrapStyle,
                            flex: 1,
                        }}>
                        <Image
                            source={require('../../assets/images/payment_methods/paypal.png')}
                            style={{ width: 50.0, height: 20.0, }}
                            resizeMode="contain"
                        />
                        <Text style={{ textAlign: 'center', maxWidth: width / 2.7, marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14Bold }}>
                            Add New Mail Address
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ currentAddingInfoIndex: 3 })}
                    style={{
                        backgroundColor: currentAddingInfoIndex == 3 ? '#F5F5F5' : Colors.whiteColor,
                        ...styles.addingInfoWrapStyle,
                        alignSelf: 'center',
                        width: width / 2.5
                    }}>
                    <Image
                        source={require('../../assets/images/payment_methods/bank.png')}
                        style={{ width: 50.0, height: 20.0, }}
                        resizeMode="contain"
                    />
                    <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14Bold }}>
                        Net Banking
                    </Text>
                </TouchableOpacity>
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
                    Add New Method
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
    addingInfoWrapStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        borderColor: '#f7f7f7',
        borderWidth: 1.0,
        elevation: 3.0,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: Sizes.fixPadding + 5.0,
        marginBottom: Sizes.fixPadding * 3.0,
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
    },
    scanCardButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding * 3.0,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginVertical: Sizes.fixPadding + 5.0,
    },
    addButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding,
        marginVertical: Sizes.fixPadding * 3.0
    },
    emailWrapStyle: {
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        backgroundColor: Colors.bodyBackColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 3.0,
        marginTop: Sizes.fixPadding - 5.0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

})

export default AddNewMethodScreen;