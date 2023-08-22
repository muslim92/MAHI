import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import CollapsingToolbar from "../../components/sliverAppBarScreen";
import { MaterialIcons } from '@expo/vector-icons';
import { Snackbar } from "react-native-paper";

const basicDetailList = [
    {
        title: 'Name',
        value: 'Samantha John'
    },
    {
        title: 'Age',
        value: '26 Yrs'
    },
    {
        title: 'Gender',
        value: 'Female'
    },
    {
        title: 'Height',
        value: '5ft 2 in'
    },
    {
        title: 'Weight',
        value: '50 kg'
    },
    {
        title: 'Status',
        value: 'Never Married'
    },
    {
        title: 'Language',
        value: 'English,Gujarati,Hindi'
    },
    {
        title: 'DOB',
        value: '17 Oct 1992'
    },
];

const habitsList = [
    {
        title: 'Driking',
        value: 'Non-Driking'
    },
    {
        title: 'Eating',
        value: 'Vegetarain'
    },
    {
        title: 'Smoking',
        value: 'Non-Smoking'
    }
];

const hobbiesList = ['Cooking', 'Traveling'];

const familyDetailList = [
    {
        title: 'Father',
        value: 'Maganbhai John',
    },
    {
        title: 'Mother',
        value: 'Chhayaben John',
    },
    {
        title: 'Brother',
        value: 'Krish John',
    },
    {
        title: 'Sister',
        value: 'Krishna John',
    }
];

const locationDetailList = [
    {
        title: 'Citizenship',
        value: 'India'
    },
    {
        title: 'Country',
        value: 'India'
    },
    {
        title: 'City',
        value: 'Delhi'
    },
    {
        title: 'Lives In',
        value: 'Delhi, India'
    }
];

const religionDetailList = [
    {
        title: 'Cast',
        value: 'Brahmin',
    },
    {
        title: 'Subcast',
        value: 'Not Specified',
    },
    {
        title: 'Religion',
        value: 'Hindu',
    }
];

const partnerPreferencesList = [
    {
        title: 'Age',
        value: '27-26 yrs',
    },
    {
        title: 'Height',
        value: '5 ft 4 in - 6 ft 4 in',
    },
    {
        title: 'Status',
        value: 'Widrower,Divorced,Seperated',
    }
];

const professionalPreferencesList = [
    {
        title: 'Education',
        value: 'BCA / MCA'
    },
    {
        title: 'Occupation',
        value: 'Any'
    }
];

const religionPreferencesList = [
    {
        title: 'Cast',
        value: 'Brahmin',
    },
    {
        title: 'Subcast',
        value: 'Any',
    },
    {
        title: 'Religion',
        value: 'Hindu',
    },
];

const locationPreferencesList = [
    {
        title: 'Citizenship',
        value: 'India',
    },
    {
        title: 'Country',
        value: 'India',
    },
    {
        title: 'City',
        value: 'Delhi',
    },
    {
        title: 'Resident Status',
        value: 'All',
    },
];

const professionalInformationList = [
    {
        title: 'Education',
        value: 'BCA / MCA',
    },
    {
        title: 'Annual Income',
        value: 'Not Specified',
    },
    {
        title: 'Education Details',
        value: 'Not Specified',
    },
    {
        title: 'Occupation',
        value: 'Software Developer',
    },
    {
        title: 'Employed In',
        value: 'Private Sector',
    },
];

const PersonDetailScreen = ({ navigation, route }) => {

    const item = route.params.item;

    const [state, setState] = useState({
        currentInfoIndex: 1,
        showSnackBar: false,
        isFavorite: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentInfoIndex,
        showSnackBar,
        isFavorite,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <CollapsingToolbar
                leftItem={
                    <View style={{ marginLeft: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="keyboard-arrow-left" size={40}
                            color={Colors.whiteColor}
                            onPress={() => navigation.pop()}

                        />
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.whiteColor18Bold }}>
                            {item.userId}
                        </Text>
                    </View>
                }
                toolbarColor={Colors.primaryColor}
                toolbarMinHeight={125}
                toolbarMaxHeight={230}
                src={item.profilePhoto}
                element={
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => updateState({ showSnackBar: true, isFavorite: !isFavorite })}
                                style={styles.shortListChatAndCallIconWrapStyle}>
                                <MaterialIcons
                                    name={isFavorite ? "star" : "star-border"}
                                    color={Colors.whiteColor}
                                    size={20}
                                />
                            </TouchableOpacity>
                            <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                                SHORTLIST
                            </Text>
                        </View>
                        <View style={{ marginHorizontal: Sizes.fixPadding, alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.push('Chating')}
                                style={styles.shortListChatAndCallIconWrapStyle}>
                                <Image
                                    source={require('../../assets/images/icons/whitesms.png')}
                                    style={{ width: 18.0, height: 18.0, }}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>
                            <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                                CHATNOW
                            </Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.push('Calling')}
                                style={styles.shortListChatAndCallIconWrapStyle}>
                                <MaterialIcons
                                    name="phone"
                                    color={Colors.whiteColor}
                                    size={20}
                                />
                            </TouchableOpacity>
                            <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                                CALLNOW
                            </Text>
                        </View>
                    </View>
                }
            >
                <View style={{ paddingBottom: Sizes.fixPadding * 3.0 }}>
                    {personInformationsHeader()}
                    {
                        currentInfoIndex == 1
                            ?
                            personalInfo()
                            :
                            currentInfoIndex == 2
                                ?
                                relgionInfo()
                                :
                                currentInfoIndex == 3
                                    ?
                                    preferencesInfo()
                                    :
                                    professionalInfo()
                    }

                </View>

            </CollapsingToolbar>
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => updateState({ showSnackBar: false })}
                style={{
                    position: 'absolute',
                    bottom: -10.0,
                    left: -10.0,
                    right: -10.0,
                    backgroundColor: "#333333"
                }}
            >
                {
                    isFavorite ?
                        'Add to shortlist'
                        :
                        'Remove from shortlist'
                }
            </Snackbar>
        </SafeAreaView >
    )

    function professionalInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor17Bold }}>
                    Professional Information
                </Text>
                {
                    professionalInformationList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function preferencesInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.blackColor17Bold }}>
                    Preferences
                </Text>
                {partnerPreferencesInfo()}
                {professionalPreferencesInfo()}
                {religionPreferencesInfo()}
                {locationPreferencesInfo()}
            </View>
        )
    }

    function locationPreferencesInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Location Preferences
                </Text>
                {
                    locationPreferencesList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function religionPreferencesInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Religion Preferences
                </Text>
                {
                    religionPreferencesList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function professionalPreferencesInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Professional Preferences
                </Text>
                {
                    professionalPreferencesList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function partnerPreferencesInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Partner Preferences
                </Text>
                {
                    partnerPreferencesList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function relgionInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor17Bold }}>
                    Religion Information
                </Text>
                {
                    religionDetailList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function personalInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor17Bold }}>
                    Personal Information
                </Text>
                <Text style={{ ...Fonts.grayColor15Bold }}>
                    A Few Lines About Me
                </Text>
                <Text numberOfLines={4} style={{ ...Fonts.grayColor13Regular }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                {basicDetails()}
                {habits()}
                {hobbies()}
                {familyDetails()}
                {locationInfo()}
                {contactInfo()}
                {unlockDetailButton()}
            </View>
        )
    }

    function unlockDetailButton() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('SubscriptionPlans')}
                style={styles.unlockDetailButtonStyle}>
                <Text style={{ ...Fonts.whiteColor17Bold }}>
                    Upgrade to unlock her contact details
                </Text>
            </TouchableOpacity>
        )
    }

    function contactInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Contact
                </Text>
                {detail({ title: 'Her Mobile No', value: '+91 75********' })}
            </View>
        )
    }

    function locationInfo() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Location
                </Text>
                {
                    locationDetailList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function familyDetails() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Family Details
                </Text>
                {
                    familyDetailList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function hobbies() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Hobbies
                </Text>
                {hobbiesList.map((item, index) => (
                    <View key={`${index}`}>
                        <Text style={{ ...Fonts.grayColor14SemiBold }}>
                            {item}
                        </Text>
                    </View>
                ))}
            </View>
        )
    }

    function habits() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Habits
                </Text>
                {
                    habitsList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function basicDetails() {
        return (
            <View>
                <Text style={{ marginVertical: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                    Basic Details
                </Text>
                {
                    basicDetailList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function detail({ title, value }) {
        return (
            <View style={{ marginBottom: Sizes.fixPadding - 7.0, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ width: 130, ...Fonts.grayColor14SemiBold }}>
                    {title}
                </Text>
                <Text style={{ ...Fonts.grayColor14SemiBold }}>
                    -   {value}
                </Text>
            </View>
        )
    }

    function personInformationsHeader() {
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: Sizes.fixPadding * 2.0 }}
            >
                <View
                    style={{
                        marginLeft: Sizes.fixPadding * 2.0,
                        marginTop: Sizes.fixPadding,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    {infoTypes({ index: 1, title: 'Personal Info' })}
                    {infoTypes({ index: 2, title: 'Religion Info' })}
                    {infoTypes({ index: 3, title: 'Preferences' })}
                    {infoTypes({ index: 4, title: 'Professional Info' })}
                </View>
            </ScrollView>
        )
    }

    function infoTypes({ index, title }) {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => updateState({ currentInfoIndex: index })}
                style={{}}>
                <Text style={{
                    ...currentInfoIndex == index ? { ...Fonts.primaryColor13Bold } : { ...Fonts.grayColor13Bold },
                    marginHorizontal: Sizes.fixPadding - 5.0,
                    marginBottom: Sizes.fixPadding - 5.0,
                }}>
                    {title}
                </Text>
                <View style={{
                    height: 4.0,
                    backgroundColor: currentInfoIndex == index ? Colors.primaryColor : Colors.grayColor,
                }}>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    shortListChatAndCallIconWrapStyle: {
        width: 30.0,
        height: 30.0,
        borderRadius: 15.0,
        borderColor: Colors.whiteColor,
        borderWidth: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unlockDetailButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding * 3.0,
    }
})

export default PersonDetailScreen;