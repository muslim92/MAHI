import React from "react";
import { SafeAreaView, View, StatusBar, ScrollView, TouchableOpacity, Dimensions, TextInput, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const { width } = Dimensions.get('screen');

const genderList = ['Male', 'Female', 'Other'];

const heightList = [
    '3 ft 9 in',
    '4 ft 2 in',
    '5 ft 9 in',
    '6 ft 3 in',
    '7 ft 1 in',
];

const weightList = [
    '40 kg','50 kg', '60 kg', '70 kg',
];

const ageList = ['18 yrs', '19 yrs', '20 yrs', '21 yrs', '22 yrs', '23 yrs', '24 yrs', '25 yrs', '26 yrs', '27 yrs', '28 yrs', '29 yrs', '30 yrs', '31 yrs', '32 yrs', '33 yrs', '34 yrs', '35 yrs', '36 yrs', '37 yrs', '38 yrs', '39 yrs', '40 yrs',];

const dateofbirthList = [
    '17 Oct 1992',
    '1 Aug 1990',
    '10 Sup 1990',
];

const educationList = ['BCA - MCA', 'BCA', 'BBA', 'Bcom', 'CA'];

const religionSectList = ['Sunni', 'Shia', 'Ahle e Hadees', 'Deo Bandi', 'Ismaili', 'Ahmadi'];

const statusList = ['Single','New Muslim', 'Widower', 'Divorced'];

const languageList = [
    'English, Urdu, Pashto', 'Sindhi', 'Saraiki', 'Balochi',
];

const occupationList = [
    'Software Developer', 'Mechanical Engineer', 'Doctor', 'Nurse', 'Pharmacist', 'School Teacher', 'Professor', 'Any Other'
];

const livesInList = ['London, UK', 'Slough, UK', 'Manchester, UK', 'Islamabad, Pakistan', 'Faisalabad, Pakistan', 'Lahore, Pakistan',];

const EditPersonalDetailScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 2.0 }}
                >
                    {editNameInfo()}
                    {editAgeAndGenderInfo()}
                    {editHeightAndWeightInfo()}
                    {editDobAndStatusInfo()}
                    {editEducationAndReligionInfo()}
                    {editLanguageInfo()}
                    {editOccupationInfo()}
                    {editLivesInInfo()}
                    {cancelAndDoneButton()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function cancelAndDoneButton() {
        return (
            <View style={styles.cancelAndDoneButtonWrapStyle}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.cancelButtonStyle}
                >
                    <Text style={{ ...Fonts.primaryColor17Bold }}>
                        Cancel
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.doneButtonStyle}
                >
                    <Text style={{ ...Fonts.whiteColor17Bold }}>
                        Done
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function editLivesInInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Lives In
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={livesInList}
                            defaultButtonText='Slough, UK'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.middleScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editOccupationInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Occupation
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={occupationList}
                            defaultButtonText='Software Developer'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.fullScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editLanguageInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Language
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={languageList}
                            defaultButtonText='English, Urdu, Pashtoo, Sindhi, Saraiki, Balochi'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.fullScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editEducationAndReligionInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View style={{ flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Education
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginRight: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={educationList}
                            defaultButtonText='BCA - MCA'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                        Religion
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={religionSectList}
                            defaultButtonText='Muslim'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editDobAndStatusInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View style={{ flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Date of Birth
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginRight: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={dateofbirthList}
                            defaultButtonText='17 Oct 1992'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                        Status
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={statusList}
                            defaultButtonText='Single'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editHeightAndWeightInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View style={{ flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Height
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginRight: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={heightList}
                            defaultButtonText='5 ft 9 in'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                        Weight
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={weightList}
                            defaultButtonText='70 kg'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editAgeAndGenderInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View style={{ flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Age
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginRight: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={ageList}
                            defaultButtonText='28 yrs'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                        Gender
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={genderList}
                            defaultButtonText='Male'
                            buttonTextStyle={{ ...Fonts.blackColor13SemiBold, textAlign: 'left' }}
                            buttonStyle={styles.halfScreenDropDownFieldStyle}
                            renderDropdownIcon={() => (<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />)}
                            rowStyle={styles.dropdownItemsStyle}
                            rowTextStyle={styles.dropdownItemTextStyle}
                            onSelect={() => { }}
                            buttonTextAfterSelection={(selectedItem, index) => {
                                return selectedItem
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            dropdownStyle={{ borderRadius: Sizes.fixPadding - 5.0, }}
                        />
                    </View>
                </View>
            </View>
        )
    }

    function editNameInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 2.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ ...Fonts.blackColor15Bold }}>
                    Name
                </Text>
                <View style={styles.textFieldWrapStyle}>
                    <TextInput
                        placeholder="Azhar Khan"
                        style={{ ...Fonts.blackColor14Regular }}
                        placeholderTextColor={Colors.blackColor}
                    />
                </View>
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
                    Edit Details
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
    halfScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width / 2.7,
        height: 32.0,
        paddingHorizontal: -20,
        left: -8.0,
    },
    fullScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width - 60,
        height: 32.0,
        paddingHorizontal: -20,
        left: -8.0,
    },
    middleScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width / 3.7,
        height: 32.0,
        paddingHorizontal: -20,
        left: -8.0,
    },
    dropdownItemsStyle: {
        borderBottomWidth: 0.0,
        height: 35.0,
    },
    dropdownItemTextStyle: {
        ...Fonts.blackColor13SemiBold,
        marginHorizontal: Sizes.fixPadding + 5.0,
        textAlign: 'left'
    },
    dropdownWrapStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        paddingHorizontal: Sizes.fixPadding,
    },
    textFieldWrapStyle: {
        marginTop: Sizes.fixPadding - 5.0,
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding - 7.0,
        paddingHorizontal: Sizes.fixPadding,
    },
    detailWrapStyle: {
        marginBottom: Sizes.fixPadding + 10.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancelButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Sizes.fixPadding,
    },
    doneButtonStyle: {
        marginLeft: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 1.0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primaryColor,
    },
    cancelAndDoneButtonWrapStyle: {
        marginVertical: Sizes.fixPadding + 3.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default EditPersonalDetailScreen;

