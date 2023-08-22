import React from "react";
import { SafeAreaView, StatusBar, View, TouchableOpacity, ScrollView, Text, Dimensions, Image, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';

const { width } = Dimensions.get('screen');

const ageFromList = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',];

const ageToList = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',];

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

const maritalStatusList = [
    'Single',
    'Divorced',
];

const countryList = [
    'Any',
    'India',
    'USA',
    'Belize',
    'Canada',
    'Mexico',
];

const stateOrCityList = [
    'Any',
    'Surat',
    'Delhi',
    'Baroda',
    'Vapi',
];

const religionList = [
    'Any',
    'Hindu',
    'Christianity',
    'Islam',
];

const educationList = [
    'Any',
    'BCA',
    'BBA',
    'Bcom',
    'MCA',
];

const professionList = [
    'Any',
    'Software Engineer',
    'CA',
    'Doctor',
    'Professor',
];

const castList = [
    'Any',
    'Hindu',
    'Khatri',
];

const annualIncomeList = [
    'Above Rs.2,00,000',
    'Above Rs.3,00,000',
    'Above Rs.4,00,000',
    'Above Rs.5,00,000',
    'Above Rs.6,00,000',
];

const SortByScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 3.0 }}
                >
                    {sortByOptions()}
                    {filterInfo()}
                    {clearAndApplyInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function clearAndApplyInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center' }}>
                <Text
                    onPress={() => navigation.pop()}
                    style={{ marginRight: Sizes.fixPadding, ...Fonts.primaryColor13ExtraBold }}
                >
                    Clear
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.pop()}
                    style={styles.applyButtonStyle}>
                    <Text style={{ ...Fonts.whiteColor17Bold }}>
                        Apply
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    function filterInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, ...Fonts.blackColor20Bold }}>
                    Filter
                </Text>
                {ageInfo()}
                {heightInfo()}
                {maritalStatusInfo()}
                {countryInfo()}
                {stateOrCityInfo()}
                {educationInfo()}
                {professionInfo()}
                {religionInfo()}
                {castInfo()}
                {annualIncomeInfo()}
            </View>
        )
    }

    function annualIncomeInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        10
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Annual Income
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={annualIncomeList}
                                defaultButtonText='Above Rs.5,00,000'
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
            </View>
        )
    }

    function castInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        09
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Caste
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={castList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function professionInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        07
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Profession
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={professionList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function educationInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        06
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Education
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={educationList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function religionInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        08
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Religion
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={religionList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function stateOrCityInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        05
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        State - City
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={stateOrCityList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function countryInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        04
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Country
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle, }}>
                            <SelectDropdown
                                data={countryList}
                                defaultButtonText='Any'
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
            </View>
        )
    }

    function maritalStatusInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        03
                    </Text>
                </View>
                <View style={{ marginLeft: Sizes.fixPadding }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        Marital Status
                    </Text>
                    <View style={{ marginTop: Sizes.fixPadding - 5.0, }}>
                        <View style={{ ...styles.dropdownWrapStyle }}>
                            <SelectDropdown
                                data={maritalStatusList}
                                defaultButtonText='Single'
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
            </View>
        )
    }

    function heightInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        02
                    </Text>
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
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

    function ageInfo() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: Sizes.fixPadding + 5.0, }}>
                <View style={styles.filterNumberWrapStyle}>
                    <Text style={{ ...Fonts.blackColor14Bold }}>
                        01
                    </Text>
                </View>
                <View style={{ flex: 1, marginLeft: Sizes.fixPadding }}>
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

    function sortByOptions() {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                {category({ sortBy: 'Last\nLogin', image: require('../../assets/images/icons/login.png') })}
                {category({ sortBy: 'Date\nCreated', image: require('../../assets/images/icons/calender.png') })}
                {category({ sortBy: 'Profile\nRelevancy', image: require('../../assets/images/icons/profile.png') })}
                {category({ sortBy: 'Latest\nPhotos', image: require('../../assets/images/icons/photo.png') })}
            </View>
        )
    }

    function category({ sortBy, image }) {
        return (
            <View style={{ alignItems: 'center', marginVertical: Sizes.fixPadding }}>
                <View style={styles.categoryWrapStyle}>
                    <Image
                        source={image}
                        style={{ width: 20.0, height: 20.0 }}
                        resizeMode="contain"
                    />
                </View>
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.blackColor14SemiBold, textAlign: 'center' }}>
                    {sortBy}
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
                    Sort By
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
    categoryWrapStyle: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        elevation: 3.0,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    halfScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width / 2.9,
        height: 25.0,
        paddingHorizontal: -20,
        left: -8.0,
        top: Sizes.fixPadding - 12.0,
    },
    fullScreenDropDownFieldStyle: {
        backgroundColor: 'transparent',
        width: width - 100,
        height: 30.0,
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
    filterNumberWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        width: 26.0, height: 26.0,
        borderRadius: 13.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropdownWrapStyle: {
        borderRadius: Sizes.fixPadding - 5.0,
        borderColor: Colors.blackColor,
        borderWidth: 1.0,
        paddingHorizontal: Sizes.fixPadding,
    },
    applyButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: Sizes.fixPadding,
        marginTop: Sizes.fixPadding + 5.0,
    }
})

export default SortByScreen;