import React from "react";
import { SafeAreaView, View, StatusBar, Text, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const { width } = Dimensions.get('screen');

const ageFromList = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];

const ageToList = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];

const heightFromList = [
    '3 ft 2 in',
    '4 ft 2 in',
    '5 ft 2 in',
    '6 ft 2 in',
    '7 ft 0 in',
];

const heightToList = [
    '3 ft 2 in',
    '4 ft 2 in',
    '5 ft 2 in',
    '6 ft 2 in',
    '7 ft 0 in',
];

const religionSectList = ['Sunni', 'Shia', 'Ahle e Hadees', 'Deo Bandi', 'Ismaili', 'Ahmadi'];

const educationList = ['BCA - MCA', 'BCA', 'BBA', 'Bcom', 'CA'];

const locationList = ['Jhelum, Pak', 'Lahore, Pak', 'Faisalabad, Pakistan', 'Islamabad, Pakistan'];

const EditPartnerPreferencesScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {editAgeInfo()}
                {editHeightInfo()}
                {editEducationInfo()}
                {editReligionSectInfo()}
                {editLocationInfo()}
                {cancelAndDoneButton()}
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

    function editLocationInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Location
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, borderColor: Colors.grayColor, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={locationList}
                            defaultButtonText='Jhelum, Pakistan'
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

    function editReligionSectInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Religion Sect
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, borderColor: Colors.grayColor, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={religionSectList}
                            defaultButtonText='Sunni'
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

    function editEducationInfo() {
        return (
            <View style={styles.detailWrapStyle}>
                <View>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Education
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, borderColor: Colors.grayColor, ...styles.dropdownWrapStyle }}>
                        <SelectDropdown
                            data={educationList}
                            defaultButtonText='BCA - MCA'
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

    function editHeightInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={{ flex: 1 }}>
                    <Text>
                        <Text style={{ ...Fonts.blackColor15Bold }}>
                            {`Height `}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Bold }}>
                            (Ft In)
                        </Text>
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: Sizes.fixPadding, flex: 1, ...styles.dropdownWrapStyle }}>
                            <Text style={{ ...Fonts.grayColor13Bold }}>
                                From
                            </Text>
                            <SelectDropdown
                                data={heightFromList}
                                defaultButtonText='4 ft 2 in'
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
                        <View style={{
                            ...styles.dropdownWrapStyle,
                            marginLeft: Sizes.fixPadding,
                            flex: 1,
                        }}>
                            <Text style={{ ...Fonts.grayColor13Bold }}>
                                To
                            </Text>
                            <SelectDropdown
                                data={heightToList}
                                defaultButtonText='5 ft 2 in'
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
            </View>
        )
    }

    function editAgeInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={{ flex: 1, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Age
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{
                            ...styles.dropdownWrapStyle,
                            flex: 1,
                            marginRight: Sizes.fixPadding,
                        }}>
                            <Text style={{ ...Fonts.grayColor13Bold }}>
                                From
                            </Text>
                            <SelectDropdown
                                data={ageFromList}
                                defaultButtonText="21"
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
                        <View style={{
                            ...styles.dropdownWrapStyle,
                            marginLeft: Sizes.fixPadding,
                            flex: 1,
                        }}>
                            <Text style={{ ...Fonts.grayColor13Bold }}>
                                To
                            </Text>
                            <SelectDropdown
                                data={ageToList}
                                defaultButtonText="25"
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
                    Edit Preferences
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
        paddingHorizontal: Sizes.fixPadding,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    halfScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width / 2.7,
        height: 30.0,
        paddingHorizontal: -20,
        left: -8.0,
        top: Sizes.fixPadding - 12.0,
    },
    fullScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width - 65,
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
        borderWidth: 1.0,
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

export default EditPartnerPreferencesScreen;

