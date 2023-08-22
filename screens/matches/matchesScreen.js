import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const matchesList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user8.png'),
        userName: 'Krisha John',
        userId: '#123456',
        userProffesion: 'Software Professional- Graduate',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        isInShortList: true,
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user9.png'),
        userName: 'Samantha John',
        userId: '#198456',
        userProffesion: 'Software Professional- Graduate',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        isInShortList: false,
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user10.png'),
        userName: 'Rashmika John',
        userId: '#102456',
        userProffesion: 'Software Professional- Graduate',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        isInShortList: true,
    }
];

const MatchesScreen = ({ navigation }) => {

    const [state, setState] = useState({
        showSnackBar: false,
        isInShortList: null,
        matches: matchesList,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        showSnackBar,
        isInShortList,
        matches,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1 }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {matchesInfo()}
                </ScrollView>
            </View>
            <Snackbar
                style={styles.snackBarStyle}
                visible={showSnackBar}
                onDismiss={() => updateState({ showSnackBar: false })}
            >
                {isInShortList ? 'Remove from shortlist' : 'Add to shortlist'}
            </Snackbar>
        </SafeAreaView>
    )

    function handleMatchesUpdate({ id }) {
        const newList = matches.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, isInShortList: !item.isInShortList };
                return updatedItem;
            }
            return item;
        });
        updateState({ matches: newList })

    }

    function matchesInfo() {
        return (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginVertical: Sizes.fixPadding + 5.0, ...Fonts.grayColor14SemiBold }}>
                    591 Matches based on your preferences
                </Text>
                {
                    matches.map((item) => (
                        <View key={`${item.id}`}>
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => navigation.push('PersonDetail', { item })}
                                style={styles.matchesWrapStyle}
                            >
                                <Image
                                    source={item.profilePhoto}
                                    style={styles.matchesProfilePhotoStyle}
                                />
                                <View style={{ paddingTop: Sizes.fixPadding - 3.0, paddingHorizontal: Sizes.fixPadding, paddingBottom: Sizes.fixPadding }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ ...Fonts.blackColor17Bold }}>
                                            {item.userName}  {item.userId}
                                        </Text>
                                        <MaterialIcons
                                            name={item.isInShortList ? "star" : 'star-border'}
                                            size={22}
                                            color={Colors.primaryColor}
                                            onPress={() => {
                                                handleMatchesUpdate({ id: item.id })
                                                updateState({ isInShortList: item.isInShortList, showSnackBar: true })
                                            }}
                                        />
                                    </View>
                                    <Text style={{ marginBottom: Sizes.fixPadding - 5.0, ...Fonts.grayColor14SemiBold }}>
                                        {item.userProffesion}
                                    </Text>
                                    <Text style={{ ...Fonts.blackColor13SemiBold }}>
                                        {item.years} Yrs, {item.heightInFeet} ft {item.heightInInch} inch
                                    </Text>
                                    <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor13SemiBold }}>
                                        {item.cast} - {item.religion}, {item.city} - {item.country}
                                    </Text>
                                    <View style={{ marginBottom: Sizes.fixPadding - 5.0, flexDirection: 'row', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => navigation.push('PersonDetail', { item })}
                                            style={{
                                                ...styles.sendInterestAndCallNowButtonStyle,
                                                marginRight: Sizes.fixPadding
                                            }}>
                                            <Text style={{ ...Fonts.primaryColor15Bold }}>
                                                Send Interest
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            activeOpacity={0.9}
                                            onPress={() => navigation.push('Calling')}
                                            style={styles.sendInterestAndCallNowButtonStyle}>
                                            <Text style={{ ...Fonts.primaryColor15Bold }}>
                                                Call Now
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text
                                        onPress={() => navigation.push('MatchingResults', { item })}
                                        style={{ ...Fonts.primaryColor13ExtraBold, textAlign: 'right' }}
                                    >
                                        View Matching Results
                                    </Text>
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
                <Text style={{ ...Fonts.blackColor20Bold }}>
                    Matches
                </Text>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('SortBy')}
                >
                    <Image
                        source={require('../../assets/images/icons/filter.png')}
                        style={{ width: 22.0, height: 22.0, }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        height: 56.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333',
    },
    matchesWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        borderRadius: Sizes.fixPadding - 5.0,
        marginBottom: Sizes.fixPadding * 2.0,
    },
    matchesProfilePhotoStyle: {
        height: 120.0,
        width: '100%',
        borderTopLeftRadius: Sizes.fixPadding - 5.0,
        borderTopRightRadius: Sizes.fixPadding - 5.0,
    },
    sendInterestAndCallNowButtonStyle: {
        borderColor: Colors.primaryColor,
        borderWidth: 1.5,
        borderRadius: Sizes.fixPadding - 5.0,
        width: 115.0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: Sizes.fixPadding - 6.0,
    }
})

export default MatchesScreen;