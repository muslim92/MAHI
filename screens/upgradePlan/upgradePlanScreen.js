import React from 'react'
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const UpgradePlanScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {userSubscribedInfo()}
                {viewSubscriptionPlansButton()}
            </View>
        </SafeAreaView>
    )

    function viewSubscriptionPlansButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('SubscriptionPlans')}
                style={styles.viewSubscriptionPlansButtonStyle}
            >
                <Text style={{ ...Fonts.primaryColor17Bold }}>
                    View Subscription Plans
                </Text>
            </TouchableOpacity>
        )
    }

    function userSubscribedInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding + 3.0, ...Fonts.grayColor15SemiBold }}>
                    You've subscribed to
                </Text>
                <View style={{
                    backgroundColor: Colors.primaryColor,
                    borderRadius: Sizes.fixPadding - 5.0,
                    padding: Sizes.fixPadding
                }}>
                    <View style={{
                        marginBottom: Sizes.fixPadding + 5.0,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                            Premium Plan
                        </Text>
                        <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                            2 days left
                        </Text>
                    </View>
                    {planConditions({ condition: 'Direct message to all profile' })}
                    {planConditions({ condition: 'Unlimited profile visits' })}
                    {planConditions({ condition: 'Access for 30 days' })}
                </View>
            </View>
        )
    }

    function planConditions({ condition }) {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.doneIconWrapStyle}>
                    <MaterialIcons
                        name="done"
                        size={12}
                        color={Colors.primaryColor}
                    />
                </View>
                <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.whiteColor13Regular }}>
                    {condition}
                </Text>
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
                    Upgrade Plan
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
        backgroundColor: Colors.whiteColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewSubscriptionPlansButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 2.0,
        margin: Sizes.fixPadding * 2.0,
    }
})

export default UpgradePlanScreen;