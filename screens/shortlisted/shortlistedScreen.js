import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, TouchableOpacity, Text, Image, FlatList, Dimensions, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Snackbar } from "react-native-paper";

const { width } = Dimensions.get('screen');

const shortlistedItemsList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user4.png'),
        userName: 'Rashmika John',
        profession: 'UI / UX Designer',
        years: 25,
        heightInFeet: 5,
        heightInInch: 2,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        userId: '#123456',
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user5.png'),
        userName: 'Tina Patel',
        profession: 'React Developer',
        years: 22,
        heightInFeet: 5,
        heightInInch: 5,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        userId: '#123456',
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user6.png'),
        userName: 'Zoya Doe',
        profession: 'Software Developer',
        years: 28,
        heightInFeet: 5,
        heightInInch: 5,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        userId: '#123456',
    },
    {
        id: '4',
        profilePhoto: require('../../assets/images/users/user7.png'),
        userName: 'Isha Patel',
        profession: 'Software Developer',
        years: 29,
        heightInFeet: 5,
        heightInInch: 5,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        userId: '#123456',
    }
];

const ShortlistedScreen = ({ navigation }) => {

    const [state, setState] = useState({
        shortlists: shortlistedItemsList,
        showSnackBar: false,
        currentUserName: '',
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        shortlists,
        showSnackBar,
        currentUserName,
    } = state;

    const deleteItemById = (id) => {
        const filteredData = shortlists.filter(item => item.id !== id);
        updateState({ shortlists: filteredData });
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {
                    shortlists.length == 0
                        ?
                        emptyShortListInfo()
                        :
                        shortlistedItems()
                }
                <Snackbar
                    visible={showSnackBar}
                    onDismiss={() => updateState({ showSnackBar: false })}
                    style={styles.snackBarStyle}
                >
                    <Text style={{ ...Fonts.whiteColor14Regular }}>
                        {currentUserName} remove from shortlist
                    </Text>
                </Snackbar>
            </View>
        </SafeAreaView>
    )

    function emptyShortListInfo() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AntDesign
                    name="star"
                    color={Colors.grayColor}
                    size={30}
                />
                <Text style={{ marginTop: Sizes.fixPadding - 5.0, ...Fonts.grayColor14SemiBold }}>
                    Short list is empty
                </Text>
            </View>
        )
    }

    function shortlistedItems() {

        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('PersonDetail', { item })}
                    style={styles.shortListedItemWrapStyle}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={item.profilePhoto}
                            style={{ width: 60.0, height: 60.0, borderRadius: Sizes.fixPadding - 5.0 }}
                        />
                        <View style={{ marginLeft: Sizes.fixPadding }}>
                            <Text style={{ ...Fonts.blackColor15Bold }}>
                                {item.userName}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text numberOfLines={1} style={{ ...Fonts.grayColor13SemiBold, width: width / 4.0, }}>
                                    {item.profession}
                                </Text>
                                <Text style={{ ...Fonts.grayColor13SemiBold }}>
                                    {` `} {item.years} yrs, {item.heightInFeet} ft {item.heightInInch} in
                                </Text>
                            </View>

                            <Text style={{ ...Fonts.grayColor13SemiBold }}>
                                {item.cast} - {item.religion}, {item.city} - {item.country}
                            </Text>
                        </View>
                    </View>
                    <Text
                        onPress={() => {
                            updateState({ currentUserName: item.userName, showSnackBar: true, })
                            deleteItemById(item.id)
                        }}
                        style={{ alignSelf: 'flex-end', ...Fonts.primaryColor13ExtraBold }}>
                        Remove
                    </Text>
                </TouchableOpacity>
                <View style={{ backgroundColor: Colors.grayColor, height: 1.0, }} />
            </View>
        )
        return (
            <FlatList
                data={shortlists}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
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
                    Shortlisted
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
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: "#333333"
    },
    shortListedItemWrapStyle: {
        marginVertical: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default ShortlistedScreen;

