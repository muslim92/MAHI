import { MaterialIcons } from '@expo/vector-icons';
import React, { createRef, useState } from "react";
import { FlatList, Image, SafeAreaView, StatusBar, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";

const searchHistoryList = [
    {
        id: '1',
        profilePhoto: require('../../assets/images/users/user2.png'),
        userName: 'Krishna Doe',
        userId: '#123456',
        years: 26,
        heightInFeet: 5,
        heightInInch: 3,
        city: 'Delhi',
        country: 'India',
    },
    {
        id: '2',
        profilePhoto: require('../../assets/images/users/user12.png'),
        userName: 'Rashmika John',
        userId: '#123456',
        years: 25,
        heightInFeet: 5,
        heightInInch: 4,
        city: 'Delhi',
        country: 'India',
    },
    {
        id: '3',
        profilePhoto: require('../../assets/images/users/user13.png'),
        userName: 'Tina Patel',
        userId: '#123456',
        years: 26,
        heightInFeet: 5,
        heightInInch: 4,
        city: 'Gujarat',
        country: 'India',
    },
];

const SearchScreen = ({ navigation }) => {

    const [searchHistory, setSearchHistory] = useState(searchHistoryList);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            {header()}
            {searchFieldWithIcons()}
            {
                searchHistory.length == 0
                    ?
                    searchHistoryEmptyInfo()
                    :
                    searchHistoryResults()
            }
        </SafeAreaView>
    )

    function searchHistoryEmptyInfo() {
        return (
            <View style={{ alignItems: 'center', marginVertical: Sizes.fixPadding + 5.0, }}>
                <MaterialIcons
                    name="search"
                    size={28}
                    color={Colors.grayColor}
                />
                <Text style={{ ...Fonts.grayColor14Bold }}>
                    Search history is empty
                </Text>
            </View>
        )
    }

    function searchHistoryResults() {
        const renderItem = ({ item }) => (
            <View style={{ marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => navigation.push('PersonDetail', { item })}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: Sizes.fixPadding + 5.0,
                    }}>
                    <Image
                        source={item.profilePhoto}
                        style={{ width: 60.0, height: 60.0, borderRadius: Sizes.fixPadding - 5.0 }}
                    />
                    <View style={{ marginLeft: Sizes.fixPadding }}>
                        <Text style={{ ...Fonts.blackColor15Bold }}>
                            {item.userName}
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.years} yrs - {item.heightInFeet} ft {item.heightInInch} in
                        </Text>
                        <Text style={{ ...Fonts.grayColor13Regular }}>
                            {item.city}, {item.country}
                        </Text>
                    </View>
                </TouchableOpacity>
                {divider()}
            </View>
        )
        return (
            <View>
                <FlatList
                    data={searchHistory}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: Sizes.fixPadding * 10.0, }}
                    ListFooterComponent={
                        <Text
                            onPress={() => setSearchHistory([])}
                            style={{ marginVertical: Sizes.fixPadding * 2.0, textAlign: 'center', ...Fonts.grayColor13ExtraBold }}
                        >
                            Clear
                        </Text>
                    }
                />
            </View>
        )
    }

    function searchFieldWithIcons() {
        const textInputRef = createRef()
        return (
            <View style={{ marginVertical: Sizes.fixPadding - 5.0, marginHorizontal: Sizes.fixPadding * 2.0, }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TextInput
                        ref={textInputRef}
                        selectionColor={Colors.primaryColor}
                        placeholder="Search profile based on your preferences"
                        style={{ ...Fonts.blackColor11SemiBold, flex: 1, }}
                        placeholderTextColor={Colors.grayColor}
                    />
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.push('Filter')}
                    >
                        <Image
                            source={require('../../assets/images/icons/grayfilter.png')}
                            style={{ height: 18.0, width: 18.0, marginRight: Sizes.fixPadding }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <MaterialIcons
                        name="search"
                        size={20}
                        color={Colors.grayColor}
                        onPress={() => textInputRef.current.focus()}
                    />
                </View>
                {divider()}
            </View>
        )
    }

    function divider() {
        return (
            <View
                style={{ marginTop: Sizes.fixPadding - 5.0, backgroundColor: Colors.grayColor, height: 1.0, }}
            />
        )
    }

    function header() {
        return (
            <View style={{ height: 56.0, justifyContent: 'center', marginHorizontal: Sizes.fixPadding * 2.0 }}>
                <Text style={{ ...Fonts.blackColor20Bold }}>
                    Search
                </Text>
            </View>
        )
    }
}

export default SearchScreen;