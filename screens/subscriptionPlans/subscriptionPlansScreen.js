import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const plansList = [
    {
        id: '1',
        planeName: 'Premium Plan',
        amount: '39.99',
        conditions: [
            'Direct message to all profile',
            'Unlimited profile visits',
            'Access for 30 days',
        ],
    },
    {
        id: '2',
        planeName: 'Basic Plan',
        amount: '9.99',
        conditions: [
            'No direct message',
            '50 profile visits everyday',
            'Access for 10 days'
        ],
    },
    {
        id: '3',
        planeName: 'Economy Plan',
        amount: '24.99',
        conditions: [
            'Direct message to 3 profile every day',
            '250 profile visits everyday',
            'Access for 28 days'
        ],
    }
];

const SubscriptionPlansScreen = ({ navigation }) => {

    const [state, setState] = useState({
        currentPlane: plansList[0].id,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentPlane,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {plansInfo()}
                    {continueButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function continueButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('SelectPaymentMethod')}
                style={styles.continueButtonStyle}
            >
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    Continue
                </Text>
            </TouchableOpacity>
        )
    }

    function plansInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding + 3.0, ...Fonts.grayColor15SemiBold }}>
                    Select your plan
                </Text>
                {
                    plansList.map((item) => (
                        <View key={`${item.id}`}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => updateState({ currentPlane: item.id })}
                            >
                                <View style={{
                                    backgroundColor: currentPlane == item.id ? Colors.primaryColor : Colors.whiteColor,
                                    ...styles.plansInfoWrapStyle,
                                }}>
                                    <View style={{
                                        marginBottom: Sizes.fixPadding + 5.0,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}>
                                        <Text style={currentPlane == item.id ? { ...Fonts.whiteColor18SemiBold } : { ...Fonts.blackColor18SemiBold }}>
                                            {item.planeName}
                                        </Text>
                                        <Text style={currentPlane == item.id ? { ...Fonts.whiteColor18SemiBold } : { ...Fonts.blackColor18SemiBold }}>
                                            {`$`}{item.amount}
                                        </Text>
                                    </View>
                                    {item.conditions.map((condition, index) => (
                                        <View key={`${index}`}>
                                            <View style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{
                                                    ...styles.doneIconWrapStyle,
                                                    backgroundColor: currentPlane == item.id ? Colors.whiteColor : '#E2E2E2',
                                                }}>
                                                    <MaterialIcons
                                                        name="done"
                                                        size={12}
                                                        color={currentPlane == item.id ? Colors.primaryColor : Colors.grayColor}
                                                    />
                                                </View>
                                                <Text style={currentPlane == item.id
                                                    ?
                                                    { ...Fonts.whiteColor13Regular, marginLeft: Sizes.fixPadding }
                                                    :
                                                    { ...Fonts.grayColor13Regular, marginLeft: Sizes.fixPadding }}
                                                >
                                                    {condition}
                                                </Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
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
                    Subscription Plans
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
    doneIconWrapStyle: {
        width: 13.0,
        height: 13.0,
        borderRadius: 6.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    plansInfoWrapStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        padding: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
        elevation: 1.0,
        borderColor: "#f7f7f7",
        borderWidth: 1.0,
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

export default SubscriptionPlansScreen;