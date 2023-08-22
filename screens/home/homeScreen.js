import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Progress from 'react-native-progress';
import { Colors, Fonts, Sizes } from "../../constants/styles";

const newMatchesList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user3.png'),
        userName: 'Samantha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#123456',
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user4.png'),
        userName: 'Rashmika John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#198456',
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user5.png'),
        userName: 'Isha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#102456',
    },

];

const lookingForUserList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user6.png'),
        userName: 'Samantha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#123456',
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user7.png'),
        userName: 'Rashmika John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#198456',
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user5.png'),
        userName: 'Isha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#102456',
    },
    {
        id: '4',
        profilePhoto: require('../../assets/images/users/user6.png'),
        userName: 'Samantha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#123456',
    },
    {
        id: '5',
        profilePhoto: require('../../assets/images/users/user7.png'),
        userName: 'Rashmika John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#198456',
    },
    {
        id: '6',
        profilePhoto: require('../../assets/images/users/user5.png'),
        userName: 'Isha John',
        years: 26,
        heightInFeet: 5,
        heightInInch: 2,
        city: 'Delhi',
        userId: '#102456',
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {userInfo()}
                    {newMatchesInfo()}
                    {discoveMatchesInfo()}
                    {banner()}
                    {lookingForUserInfo()}
                </ScrollView>
            </View>
        </SafeAreaView>
    )

    function lookingForUserInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('PersonDetail', { item })}
                style={styles.lookingForUserInfoWrapStyle}
            >
                <Image
                    source={item.profilePhoto}
                    style={styles.profilePhotoStyle}
                />
                <View style={{ padding: Sizes.fixPadding - 5.0, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        {item.userName}
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.years} Yrs, {item.heightInFeet} ft {item.heightInInch} inch
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.userId} {item.city}
                    </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View style={{ marginVertical: Sizes.fixPadding * 2.0, }}>
                <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Fonts.blackColor17Bold }}>
                        {lookingForUserList.length} Members Looking For You
                    </Text>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        See all
                    </Text>
                </View>
                <FlatList
                    data={lookingForUserList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: Sizes.fixPadding * 2.0, paddingTop: Sizes.fixPadding + 5.0 }}
                />
            </View>
        )
    }

    function banner() {
        return (
            <View style={styles.bannerWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Fonts.blackColor14RegularBold }}>
                        {`Complete your profile for\nmore responses`}
                    </Text>
                    <MaterialCommunityIcons name="circle-slice-5" size={24} color={Colors.primaryColor} />
                </View>
                <View style={{ marginTop: Sizes.fixPadding * 2.0, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <Text numberOfLines={2} style={{ flex: 1, marginRight: Sizes.fixPadding, marginBottom: Sizes.fixPadding - 3.0, ...Fonts.blackColor14Regular, }}>
                        {`The first thing that members\nlook for in a is a photo`}
                    </Text>
                    <View style={styles.addPhotoButtonStyle}>
                        <Text style={{ ...Fonts.whiteColor14Bold }}>
                            Add Photo
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function discoveMatchesInfo() {
        return (
            <View style={{ margin: Sizes.fixPadding * 2.0, }}>
                <Text style={{ marginBottom: Sizes.fixPadding, ...Fonts.blackColor17Bold }}>
                    Discove Matches
                </Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{
                        ...styles.locationAndProfessionMatchesInfoWrapStyle,
                        marginRight: Sizes.fixPadding,
                    }}>
                        <MaterialIcons name="location-on" size={40} color={Colors.grayColor} />
                        <View>
                            <Text style={{ ...Fonts.blackColor15SemiBold }}>
                                Location
                            </Text>
                            <Text style={{ ...Fonts.blackColor14Regular }}>
                                135 matches
                            </Text>
                        </View>

                    </View>
                    <View style={{
                        ...styles.locationAndProfessionMatchesInfoWrapStyle,
                        marginLeft: Sizes.fixPadding
                    }}>
                        <MaterialCommunityIcons name="briefcase" size={40} color={Colors.grayColor} />
                        <View>
                            <Text style={{ ...Fonts.blackColor15SemiBold }}>
                                Profession
                            </Text>
                            <Text style={{ ...Fonts.blackColor14Regular }}>
                                15 matches
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function newMatchesInfo() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('PersonDetail', { item })}
                style={styles.newMatchesInfoWrapStyle}
            >
                <Image
                    source={item.profilePhoto}
                    style={styles.profilePhotoStyle}
                />
                <View style={{ padding: Sizes.fixPadding - 5.0, }}>
                    <Text style={{ ...Fonts.blackColor15Bold }}>
                        {item.userName}
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.years} Yrs, {item.heightInFeet} ft {item.heightInInch} inch
                    </Text>
                    <Text style={{ ...Fonts.grayColor13Regular }}>
                        {item.userId} {item.city}
                    </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <View>
                <View style={styles.newMatchesTitleWrapStyle}>
                    <Text style={{ ...Fonts.blackColor17Bold }}>
                        New Matches
                    </Text>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        See all
                    </Text>
                </View>
                <FlatList
                    data={newMatchesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: Sizes.fixPadding * 2.0, paddingTop: Sizes.fixPadding + 5.0 }}
                />
            </View>
        )
    }

    function userInfo() {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: Sizes.fixPadding * 2.0
            }}>
                <Image
                    source={require('../../assets/images/users/user1.png')}
                    style={{
                        width: 100.0, height: 100.0,
                        borderRadius: Sizes.fixPadding - 5.0
                    }}
                />
                <View style={{ marginLeft: Sizes.fixPadding + 5.0 }}>
                    <Text style={{ ...Fonts.blackColor17Bold }}>
                        Azhar Khan
                    </Text>
                    <Text style={{ ...Fonts.grayColor15SemiBold }}>
                        LV-651232
                    </Text>
                    <Progress.Bar
                        progress={0.77}
                        unfilledColor={Colors.grayColor}
                        color={Colors.primaryColor}
                        borderWidth={0.0}
                        width={190}
                        height={3}
                        borderRadius={2}
                        style={{ marginVertical: Sizes.fixPadding - 4.0 }}
                    />
                    <Text style={{ marginBottom: Sizes.fixPadding - 4.0, ...Fonts.grayColor15SemiBold }}>
                        77% Profile Completion
                    </Text>
                    <View
                        style={styles.basicAndUpgradePlanButtonWrapStyle}
                    >
                        <View style={styles.basicButtonStyle}>
                            <Text style={{ ...Fonts.whiteColor14Regular }}>
                                Basic
                            </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() => navigation.push('UpgradePlan')}
                            style={{ paddingHorizontal: Sizes.fixPadding, paddingVertical: Sizes.fixPadding - 6.0, }}>
                            <Text style={{ ...Fonts.primaryColor14Regular }}>
                                Upgrade plan
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function header() {
        return (
            <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginVertical: Sizes.fixPadding + 5.0, ...Fonts.blackColor20Bold }}>
                Home
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    basicAndUpgradePlanButtonWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    basicButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderTopLeftRadius: Sizes.fixPadding - 6.0,
        borderBottomLeftRadius: Sizes.fixPadding - 6.0,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 6.0,
    },
    newMatchesTitleWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Sizes.fixPadding * 2.0,
        marginTop: Sizes.fixPadding + 10.0,
    },
    newMatchesInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        elevation: 3.0,
        alignSelf: 'flex-start',
        marginRight: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 8.0
    },
    profilePhotoStyle: {
        width: 150.0,
        height: 100.0,
        borderTopLeftRadius: Sizes.fixPadding - 5.0,
        borderTopRightRadius: Sizes.fixPadding - 5.0,
    },
    locationAndProfessionMatchesInfoWrapStyle: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: Colors.whiteColor,
        elevation: 1.0,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding + 5.0,
        paddingHorizontal: Sizes.fixPadding * 2.0,
        borderColor: '#EEEEEE',
        borderWidth: 1.0,
        justifyContent: 'space-between',
    },
    addPhotoButtonStyle: {
        backgroundColor: Colors.primaryColor,
        borderRadius: Sizes.fixPadding - 5.0,
        paddingVertical: Sizes.fixPadding - 2.0,
        paddingHorizontal: Sizes.fixPadding * 2.5,
        alignSelf: 'flex-end'
    },
    bannerWrapStyle: {
        backgroundColor: '#F1F8E9',
        borderRadius: Sizes.fixPadding,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding
    },
    lookingForUserInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        elevation: 3.0,
        alignSelf: 'flex-start',
        marginRight: Sizes.fixPadding * 2.0,
        marginBottom: Sizes.fixPadding - 8.0
    }
})

export default HomeScreen;