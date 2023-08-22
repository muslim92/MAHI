import React, { useState } from "react";
import { SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image, Dimensions, StyleSheet, FlatList } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import { TabView, TabBar } from 'react-native-tab-view';

const { width } = Dimensions.get('screen');

const acceptedDataList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user3.png'),
        userId: '#123456',
        userName: 'Samantha John',
        lastMessage: 'Lorem ipsum dolor sit amet, consect',
        lastMessageTimeorDate: '11:20 am',
        isUnreadMessages: true,
        unreadMessagesCount: 5,
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user4.png'),
        userId: '#123456',
        userName: 'Rashmika John',
        lastMessage: 'Lorem ipsum dolor sit amet, consect',
        lastMessageTimeorDate: '11:10 am',
        isUnreadMessages: false,
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user5.png'),
        userId: '#123456',
        userName: 'Tina Pateln',
        lastMessage: 'Lorem ipsum dolor sit amet, consect',
        lastMessageTimeorDate: '11:00 am',
        isUnreadMessages: true,
        unreadMessagesCount: 2,
    },
    {
        id: '4',
        profilePhoto: require('../../assets/images/users/user6.png'),
        userId: '#123456',
        userName: 'Zoya Doe',
        lastMessage: 'Lorem ipsum dolor sit amet, consect',
        lastMessageTimeorDate: '11:50 am',
        isUnreadMessages: true,
        unreadMessagesCount: 3,
    },
    {
        id: '5',
        profilePhoto: require('../../assets/images/users/user7.png'),
        userId: '#123456',
        userName: 'Isha Patel',
        lastMessage: 'Lorem ipsum dolor sit amet, consect',
        lastMessageTimeorDate: '15 Dec',
        isUnreadMessages: false,
    }
];

const requestedDataList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user14.png'),
        userName: 'Krystal Doe',
        userId: '#123456',
        years: 26,
        heightInFeet: 5,
        heightInInch: 3,
        cast: 'Christain',
        religion: 'Catholic',
        city: 'Delhi',
        country: 'India',
        profession: 'UI- UX Designer',
        education: 'Computer Science',
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user15.png'),
        userName: 'Kiya Patel',
        userId: '#123456',
        years: 25,
        heightInFeet: 5,
        heightInInch: 3,
        cast: 'Brahmin',
        religion: 'Hindu',
        city: 'Delhi',
        country: 'India',
        profession: 'Software Developer',
        education: 'MSC.IT',
    },
];

const ChatsScreen = ({ navigation }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Accepted' },
        { key: 'second', title: 'New Request' },
    ]);

    const renderScene = ({ route, jumpTo }) => {
        switch (route.key) {
            case 'first':
                return <AcceptedChats navigation={navigation} />;
            case 'second':
                return <RequestedChats navigation={navigation} />;
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            tabStyle={{ width: width / 2.0 - 20.0, }}
                            indicatorStyle={[
                                {
                                    backgroundColor: Colors.primaryColor,
                                    height: 4.0,
                                    bottom: -4,
                                },
                            ]}
                            activeColor={Colors.primaryColor}
                            scrollEnabled={true}
                            style={styles.tabBarStyle}
                            renderLabel={({ route, focused }) => (
                                <Text
                                    style={focused ? { marginTop: Sizes.fixPadding, ...Fonts.primaryColor13Bold } : { marginTop: Sizes.fixPadding, ...Fonts.grayColor13Bold }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    )

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
                    Chats
                </Text>
            </View>
        )
    }
}

const AcceptedChats = ({ navigation }) => {
    return (
        <>
            {acceptedData()}
        </>
    )

    function acceptedData() {

        const renderItem = ({ item }) => (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('Chating')}
                style={styles.acceptedDataWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={item.profilePhoto}
                        style={{ width: 35.0, height: 35.0, borderRadius: Sizes.fixPadding - 5.0 }}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding }}>
                        <Text style={{ ...Fonts.blackColor13Bold }}>
                            {item.userName}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            Lorem ipsum dolor sit amet, consect
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...Fonts.grayColor10Regular }}>
                        {item.lastMessageTimeorDate}
                    </Text>
                    {
                        item.isUnreadMessages ?
                            <View style={styles.unreadMessagesCountWrapStyle}>
                                <Text style={{ ...Fonts.whiteColor10ExtraBold }}>
                                    {item.unreadMessagesCount}
                                </Text>
                            </View>
                            :
                            null
                    }
                </View>
            </TouchableOpacity>
        )
        return (
            <>
                <FlatList
                    data={acceptedDataList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </>
        )
    }

}

const RequestedChats = ({ navigation }) => {

    const [newRequests, setNewRequests] = useState(requestedDataList);

    return (
        <>
            {newRequests.length == 0 ?
                noRequestsInfo()
                :
                requestsInfo()
            }
        </>
    )

    function requestsInfo() {

        const deleteItemById = id => {
            const filteredData = newRequests.filter(item => item.id !== id);
            setNewRequests(filteredData)
        }

        const renderItem = ({ item }) => (
            <View style={{ marginBottom: Sizes.fixPadding * 3.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={item.profilePhoto}
                        style={{ width: 80.0, height: 80.0, borderRadius: Sizes.fixPadding - 5.0 }}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding, flex: 1, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ ...Fonts.blackColor14Bold }}>
                                {item.userName}
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ ...Fonts.grayColor13SemiBold, marginRight: Sizes.fixPadding - 5.0, }}>
                                    {item.years} yrs - {item.heightInFeet}ft {item.heightInInch}in
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    onPress={() => deleteItemById(item.id)}
                                    style={styles.cancelButtonWrapStyle}>
                                    <MaterialIcons
                                        name="close"
                                        color={Colors.primaryColor}
                                        size={15}
                                    />
                                </TouchableOpacity>
                            </View>

                        </View>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.religion} {item.cast}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.city}, {item.country}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.profession} / {item.education}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.push('PersonDetail', { item })}
                        style={{
                            ...styles.moreInfoAndAcceptReqButtonStyle,
                            marginRight: Sizes.fixPadding,
                        }}>
                        <Text style={{ ...Fonts.primaryColor15Bold }}>
                            More Info
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => deleteItemById(item.id)}
                        style={{
                            ...styles.moreInfoAndAcceptReqButtonStyle,
                            marginLeft: Sizes.fixPadding,
                            backgroundColor: Colors.primaryColor,
                        }}>
                        <Text style={{ ...Fonts.whiteColor15Bold }}>
                            Accept Request
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

        return (
            <FlatList
                data={newRequests}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    function noRequestsInfo() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ ...Fonts.grayColor14SemiBold, textAlign: 'center' }}>
                    No new request
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
    acceptedDataWrapStyle: {
        marginBottom: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    unreadMessagesCountWrapStyle: {
        width: 12.0,
        height: 12.0,
        borderRadius: 6.0,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Sizes.fixPadding - 6.0,
    },
    cancelButtonWrapStyle: {
        width: 20.0,
        height: 20.0,
        borderRadius: 10.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
    },
    moreInfoAndAcceptReqButtonStyle: {
        flex: 1,
        borderColor: Colors.primaryColor,
        borderWidth: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: Sizes.fixPadding - 2.0,
        borderRadius: Sizes.fixPadding - 5.0,
    },
    tabBarStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        borderBottomWidth: 4.0,
        borderColor: Colors.grayColor,
        marginBottom: Sizes.fixPadding * 2.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
    }
})

export default ChatsScreen;

