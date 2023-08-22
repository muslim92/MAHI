import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, TouchableOpacity, Text, Image, Dimensions, FlatList, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { Snackbar } from "react-native-paper";

const { width } = Dimensions.get('screen');

const profileViewsList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user3.png'),
        userName: 'Samantha John',
        profession: 'Softwarw Developer',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        cast: 'Khatri',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        userId: '#123456',
        isInShortList: false,
    },
    {
        id: '2',
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
        isInShortList: false,
    },
    {
        id: '3',
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
        isInShortList: true,
    },
    {
        id: '4',
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
        isInShortList: false,
    },
    {
        id: '5',
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
        isInShortList: true,
    }
];

const ProfileViewsScreen = ({ navigation }) => {

    const [state, setState] = useState({
        profileViews: profileViewsList,
        isInShortList: null,
        showSnackBar: false,
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        profileViews,
        isInShortList,
        showSnackBar,
    } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                {profileViewsInfo()}
            </View>
            <Snackbar
                visible={showSnackBar}
                onDismiss={() => updateState({ showSnackBar: false })}
                style={styles.snackBarStyle}
            >
                {
                    !isInShortList ?
                        'Add to shortlist'
                        :
                        'Remove from shortlist'
                }
            </Snackbar>
        </SafeAreaView>
    )

    function handleProfileViewsUpdate({ id }) {
        const newList = profileViews.map((item) => {
            if (item.id === id) {
                const updatedItem = { ...item, isInShortList: !item.isInShortList };
                return updatedItem;
            }
            return item;
        });
        updateState({ profileViews: newList })

    }

    function profileViewsInfo() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('PersonDetail', { item })}
                    style={{ marginVertical: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                    <MaterialIcons
                        name={item.isInShortList ? "star" : 'star-border'}
                        color={Colors.primaryColor}
                        size={24}
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            handleProfileViewsUpdate({ id: item.id })
                            updateState({ isInShortList: item.isInShortList, showSnackBar: true })
                        }}
                    />
                </TouchableOpacity>
                <View style={{ backgroundColor: Colors.grayColor, height: 1.0, }} />
            </View>
        )

        return (
            <FlatList
                data={profileViews}
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
                    Profile Views
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
    }
})

export default ProfileViewsScreen;

