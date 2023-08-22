import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, Image, Dimensions, ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('screen');

const ProfileDetailScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showPersonalDetail: true,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const { showPersonalDetail } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {backArrow()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0, }}
                >
                    {profileInfo()}
                    {personalAndPartnerInfoHeader()}
                    {showPersonalDetail
                        ?
                        personalDetail()
                        :
                        partnerDetail()
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function partnerDetail() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {partnerAgeInfo()}
                {partnerHeightInfo()}
                {detailInFullScreen({ title: 'Education', value: 'MSC.IT' })}
                {detailInFullScreen({ title: 'Religion', value: 'Hindu' })}
                {detailInFullScreen({ title: 'Location', value: 'Delhi, India' })}
            </View>
        )
    }

    function partnerHeightInfo() {
        return (
            <View>
                <Text style={{ ...Fonts.blackColor14Regular }}>
                    <Text style={{ marginRight: Sizes.fixPadding - 2.5, ...Fonts.blackColor15Bold }}>
                        {`Height `}
                    </Text>
                    (Ft In)
                </Text>
                <View style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        ...styles.detailWrapStyle,
                        marginRight: Sizes.fixPadding - 2.5,
                        flex: 1
                    }}>
                        <Text style={{ marginTop: Sizes.fixPadding - 15.0, ...Fonts.grayColor14Bold }}>
                            From
                        </Text>
                        <Text style={{ marginBottom: Sizes.fixPadding - 15.0, ...Fonts.blackColor14Regular }}>
                            4 ft 6 in
                        </Text>
                    </View>

                    <View style={{
                        ...styles.detailWrapStyle,
                        marginLeft: Sizes.fixPadding - 2.5,
                        flex: 1
                    }}>
                        <Text style={{ marginTop: Sizes.fixPadding - 15.0, ...Fonts.grayColor14Bold }}>
                            To
                        </Text>
                        <Text style={{ marginBottom: Sizes.fixPadding - 15.0, ...Fonts.blackColor14Regular }}>
                            5 ft 4 in
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function partnerAgeInfo() {
        return (
            <View >
                <Text style={{ marginRight: Sizes.fixPadding - 2.5, ...Fonts.blackColor15Bold }}>
                    Age
                </Text>
                <View style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{
                        ...styles.detailWrapStyle,
                        marginRight: Sizes.fixPadding - 2.5,
                        flex: 1
                    }}>
                        <Text style={{ marginTop: Sizes.fixPadding - 15.0, ...Fonts.grayColor14Bold }}>
                            From
                        </Text>
                        <Text style={{ marginBottom: Sizes.fixPadding - 15.0, ...Fonts.blackColor14Regular }}>
                            21
                        </Text>
                    </View>

                    <View style={{
                        ...styles.detailWrapStyle,
                        marginLeft: Sizes.fixPadding - 2.5,
                        flex: 1
                    }}>
                        <Text style={{ marginTop: Sizes.fixPadding - 15.0, ...Fonts.grayColor14Bold }}>
                            To
                        </Text>
                        <Text style={{ marginBottom: Sizes.fixPadding - 15.0, ...Fonts.blackColor14Regular }}>
                            29
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function personalDetail() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                {detailInFullScreen({ title: 'Name', value: 'Azhar Khan' })}
                {detailInHalfScreen({
                    firstTitle: 'Age',
                    firstValue: '28 yrs',
                    secondTitle: 'Gender',
                    secondValue: 'Male'
                })}
                {detailInHalfScreen({
                    firstTitle: 'Height',
                    firstValue: '5 ft 9 in',
                    secondTitle: 'Weight',
                    secondValue: '70 kg'
                })}
                {detailInHalfScreen({
                    firstTitle: 'Date of Birth',
                    firstValue: '17 Oct 1992',
                    secondTitle: 'Status',
                    secondValue: 'Single'
                })}
                {detailInHalfScreen({
                    firstTitle: 'Education',
                    firstValue: 'BCA-MCA',
                    secondTitle: 'Religion',
                    secondValue: 'Hindu'
                })}
                {detailInFullScreen({ title: 'Language', value: 'English,Gujarati,Hindi' })}
                {detailInFullScreen({ title: 'Occupation', value: 'Software Developer' })}
                {detailInFullScreen({ title: 'Lives In', value: 'Delhi, India', inShort: true })}
            </View>
        )
    }

    function detailInHalfScreen({ firstTitle, firstValue, secondTitle, secondValue }) {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginRight: Sizes.fixPadding - 2.5, ...Fonts.blackColor15Bold }}>
                        {firstTitle}
                    </Text>
                    <View style={{
                        ...styles.detailWrapStyle,
                        marginRight: Sizes.fixPadding - 2.5
                    }}>
                        <Text style={{ ...Fonts.blackColor14Regular }}>
                            {firstValue}
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ marginLeft: Sizes.fixPadding - 2.5, ...Fonts.blackColor15Bold }}>
                        {secondTitle}
                    </Text>
                    <View style={{
                        ...styles.detailWrapStyle,
                        marginLeft: Sizes.fixPadding - 2.5
                    }}>
                        <Text style={{ ...Fonts.blackColor14Regular }}>
                            {secondValue}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function detailInFullScreen({ title, value, inShort }) {
        return (
            <View style={{ alignSelf: inShort ? 'flex-start' : 'stretch', marginBottom: Sizes.fixPadding }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    {title}
                </Text>
                <View style={styles.detailWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Regular }}>
                        {value}
                    </Text>
                </View>
            </View>
        )
    }

    function personalAndPartnerInfoHeader() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showPersonalDetail: true })}
                    style={{ alignItems: 'center' }}
                >
                    <View style={{
                        marginBottom: Sizes.fixPadding - 5.0,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Text style={showPersonalDetail ? { ...Fonts.primaryColor13Bold } : { ...Fonts.grayColor13Bold }}>
                            Personal Details
                        </Text>
                        {
                            showPersonalDetail ?
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => navigation.push('EditPersonalDetail')}
                                >
                                    <Image
                                        source={require('../../assets/images/icons/selectededit.png')}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, width: 12.0, height: 12.0, }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                :
                                null
                        }
                    </View>
                    <View style={{
                        width: (width / 2.0) - 20,
                        backgroundColor: showPersonalDetail ? Colors.primaryColor : Colors.grayColor,
                        height: 4.0,
                    }} />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => updateState({ showPersonalDetail: false })}
                    style={{ alignItems: 'center' }}
                >
                    <View style={{ marginBottom: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={showPersonalDetail ? { ...Fonts.grayColor13Bold } : { ...Fonts.primaryColor13Bold }}>
                            Partner Preferences
                        </Text>
                        {
                            !showPersonalDetail ?
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => navigation.push('EditPartnerPreferences')}
                                >
                                    <Image
                                        source={require('../../assets/images/icons/selectededit.png')}
                                        style={{ marginLeft: Sizes.fixPadding - 5.0, width: 12.0, height: 12.0, }}
                                        resizeMode="contain"
                                    />
                                </TouchableOpacity>
                                :
                                null
                        }
                    </View>
                    <View style={{
                        width: (width / 2.0) - 20,
                        backgroundColor: showPersonalDetail ? Colors.grayColor : Colors.primaryColor,
                        height: 4.0,
                    }} />
                </TouchableOpacity>
            </View >
        )
    }

    function profileInfo() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../assets/images/users/user1.png')}
                    style={{ width: 150.0, height: 150.0, borderRadius: Sizes.fixPadding - 5.0, }}
                />
                <Text style={{ marginTop: Sizes.fixPadding - 8.0, ...Fonts.blackColor15Bold }}>
                    Azhar Khan
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...Fonts.grayColor13SemiBold }}>
                        26 yrs
                    </Text>
                    <View style={styles.dotStyle} />
                    <Text style={{ ...Fonts.grayColor13SemiBold }}>
                        Software Developer
                    </Text>
                </View>
                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                    Delhi, India
                </Text>
                {messageAndCallButton()}
                <Text style={{ textAlign: 'center', ...Fonts.grayColor13SemiBold, }}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing\nelit.  Sed vestibulum mauris eu augue eleifend rutrum.\nAliquam dui massa.`}
                </Text>
            </View>
        )
    }

    function messageAndCallButton() {
        return (
            <View style={styles.messageAndCallButtonWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('Chating')}
                    style={{
                        ...styles.messageAndCallButtonStyle,
                        marginRight: Sizes.fixPadding,
                    }}
                >
                    <Image
                        source={require('../../assets/images/icons/whitechat.png')}
                        style={{ width: 18.0, height: 18.0, }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('Calling')}
                    style={styles.messageAndCallButtonStyle}
                >
                    <MaterialCommunityIcons
                        name="phone-outline"
                        size={18}
                        color={Colors.whiteColor}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function backArrow() {
        return (
            <View style={{ height: 56.0, justifyContent: 'center', paddingHorizontal: Sizes.fixPadding, }}>
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
    messageAndCallButtonStyle: {
        backgroundColor: Colors.primaryColor,
        width: 28.0,
        height: 28.0,
        borderRadius: Sizes.fixPadding - 6.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageAndCallButtonWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    },
    dotStyle: {
        height: 5.0,
        width: 5.0,
        borderRadius: 2.5,
        backgroundColor: Colors.grayColor,
        marginHorizontal: Sizes.fixPadding - 3.0,
    },
    detailWrapStyle: {
        marginTop: Sizes.fixPadding - 5.0,
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding - 3.0,
        paddingHorizontal: Sizes.fixPadding,
    }
})

export default ProfileDetailScreen;

