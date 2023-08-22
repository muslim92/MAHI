import React from "react";
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const matchingBasicDetailList = [
    {
        title: 'Living In',
        value: 'Delhi, India',
    },
    {
        title: 'Status',
        value: 'Never Married',
    },
    {
        title: 'Income',
        value: '32000',
    },
];

const matchingReligionAndWorkList = [
    {
        title: 'Religion',
        value: 'Gujarati',
    },
    {
        title: 'Work',
        value: 'Software Developer',
    }
];

const interestAndHobbiesList = [
    {
        id: '1',
        interestOrHobby: 'Cooking',
        isMatch: true,
    },
    {
        id: '2',
        interestOrHobby: 'Movies',
        isMatch: false,
    },
    {
        id: '3',
        interestOrHobby: 'Pets',
        isMatch: false,
    },
    {
        id: '4',
        interestOrHobby: 'Painting',
        isMatch: true,
    },
    {
        id: '5',
        interestOrHobby: 'Music',
        isMatch: true,
    },
    {
        id: '6',
        interestOrHobby: 'Gardening',
        isMatch: true,
    },
];

const MatchingResultsScreen = ({ navigation, route }) => {

    const item = route.params.item;

    const renderItem = ({ item, index }) => (
        <View style={{
            marginRight: index % 2 == 0 ? Sizes.fixPadding : Sizes.fixPadding * 2.0,
            marginLeft: index % 2 == 0 ? Sizes.fixPadding * 5.5 : 0.0,
            ...styles.interestOrHobbiesInfoWrapStyle,
        }}>
            <Text style={{ ...Fonts.grayColor14SemiBold }}>
                {item.interestOrHobby}
            </Text>
            <MaterialIcons
                name={item.isMatch ? "done" : 'close'}
                color={item.isMatch ? Colors.greenColor : Colors.redColor}
                size={17}
                style={{ marginLeft: Sizes.fixPadding - 5.0 }}
            />
        </View>
    )

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <FlatList
                    ListHeaderComponent={
                        <>
                            {matchingInPercentageInfo()}
                            {basicDetailInfo()}
                            {interestAndHobbiesInfo()}
                        </>
                    }
                    data={interestAndHobbiesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 3.0, }}
                    ListFooterComponent={
                        <>
                            {religionAndWorkInfo()}
                            {educationInfo()}
                            {messageAndCallButton()}
                        </>
                    }
                />
            </View>
        </SafeAreaView>
    )

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

    function interestAndHobbiesInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.matchingResultsNumberWrapStyle}>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                02
                            </Text>
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                            Interest and Hobbies
                        </Text>
                    </View>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        95%
                    </Text>
                </View>
            </View>
        )
    }



    function educationInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.matchingResultsNumberWrapStyle}>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                04
                            </Text>
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                            Education
                        </Text>
                    </View>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        100%
                    </Text>
                </View>
                <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding * 3.6, marginBottom: Sizes.fixPadding - 7.0, }}>
                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                        BCA / MCA
                    </Text>
                </View>
            </View>
        )
    }

    function religionAndWorkInfo() {
        return (
            <View style={{ marginVertical: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.matchingResultsNumberWrapStyle}>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                03
                            </Text>
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                            Religion and Work
                        </Text>
                    </View>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        100%
                    </Text>
                </View>
                {
                    matchingReligionAndWorkList.map((item, index) => (
                        <View key={`${index}`}>
                            {detail({ title: item.title, value: item.value })}
                        </View>
                    ))
                }
            </View>
        )
    }

    function basicDetailInfo() {
        return (
            <View style={{ marginBottom: Sizes.fixPadding, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.matchingResultsNumberWrapStyle}>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                01
                            </Text>
                        </View>
                        <Text style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor15Bold }}>
                            Basic Detail
                        </Text>
                    </View>
                    <Text style={{ ...Fonts.primaryColor13ExtraBold }}>
                        100%
                    </Text>
                </View>
                {
                    matchingBasicDetailList.map((item, index) => (
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
            <View style={{ marginTop: Sizes.fixPadding - 5.0, marginLeft: Sizes.fixPadding * 3.6, marginBottom: Sizes.fixPadding - 7.0, }}>
                <Text style={{ ...Fonts.grayColor14SemiBold }}>
                    {title} - {value}
                </Text>
            </View>
        )
    }

    function matchingInPercentageInfo() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: Sizes.fixPadding * 2.0,
            }}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../assets/images/users/user1.png')}
                        style={{ width: 80.0, height: 80.0, borderRadius: Sizes.fixPadding - 5.0 }}
                    />
                    <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.blackColor14Bold }}>
                        Azhar Khan
                    </Text>
                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                        #159874
                    </Text>
                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                        26 Male, Delhi
                    </Text>
                </View>
                <Text style={{ marginHorizontal: Sizes.fixPadding * 2.0, marginTop: Sizes.fixPadding * 3.0, ...Fonts.primaryColor17ExtraBold }}>
                    95%
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.push('PersonDetail', { item: item })}
                    >
                        <Image
                            source={item.profilePhoto}
                            style={{ width: 80.0, height: 80.0, borderRadius: Sizes.fixPadding - 5.0 }}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginTop: Sizes.fixPadding, ...Fonts.blackColor14Bold }}>
                        {item.userName}
                    </Text>
                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                        {item.userId}
                    </Text>
                    <Text style={{ ...Fonts.grayColor14SemiBold }}>
                        {item.years} Female, {item.city}
                    </Text>
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
                    Matching Results
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
    matchingResultsNumberWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 4.0,
        width: 26.0, height: 26.0,
        borderRadius: 13.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    interestOrHobbiesInfoWrapStyle: {
        borderColor: Colors.grayColor,
        borderWidth: 1.0,
        borderRadius: Sizes.fixPadding - 7.0,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginBottom: Sizes.fixPadding,
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding - 9.0
    },
    messageAndCallButtonStyle: {
        backgroundColor: Colors.primaryColor,
        width: 32.0,
        height: 32.0,
        borderRadius: Sizes.fixPadding - 5.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageAndCallButtonWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0
    }
})

export default MatchingResultsScreen;