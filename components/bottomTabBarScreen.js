import React, { useCallback, useState } from "react";
import { View, Image, Text, BackHandler, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../constants/styles";
import MatchesScreen from "../screens/matches/matchesScreen";
import SearchScreen from "../screens/search/searchScreen";
import ProfileScreen from "../screens/profile/profileScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    const backAction = () => {
        backClickCount == 1 ? BackHandler.exitApp() : _spring();
        return true;
    }

    useFocusEffect(
        useCallback(() => {
            BackHandler.addEventListener("hardwareBackPress", backAction);
            return () => BackHandler.removeEventListener("hardwareBackPress", backAction);
        }, [backAction])
    );

    function _spring() {
        setBackClickCount(1);
        setTimeout(() => {
            setBackClickCount(0)
        }, 1000)
    }

    const [backClickCount, setBackClickCount] = useState(0);

    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: Colors.primaryColor,
                    tabBarInactiveTintColor: Colors.grayColor,
                    tabBarStyle: { ...styles.tabBarStyle },
                    tabBarShowLabel: false,
                }}
            >
                <Tab.Screen
                    name={'Matches'}
                    component={MatchesScreen}
                    options={{
                        tabBarIcon: ({ color }) => tabSort({ icon: require('../assets/images/icons/graymatches.png'), color: color, label: 'Matches' })
                    }}
                />
                <Tab.Screen
                    name={'Search'}
                    component={SearchScreen}
                    options={{
                        tabBarIcon: ({ color }) => tabSort({ icon: require('../assets/images/icons/graysearch.png'), color: color, label: 'Search' })
                    }}
                />
                <Tab.Screen
                    name={'Profile'}
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color }) => tabSort({ icon: require('../assets/images/icons/grayprofile.png'), color: color, label: 'Profile' })
                    }}
                />
            </Tab.Navigator>
            {exitInfo()}
        </>
    )

    function tabSort({ icon, color, label }) {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={icon}
                    style={{ width: 25.0, height: 25.0, tintColor: color, resizeMode: 'contain' }}
                    resizeMode="contain"
                />
                <Text style={{ fontSize: 14.0, fontFamily: 'NunitoSans_Bold', color: color }}>
                    {label}
                </Text>
            </View>
        )
    }

    function exitInfo() {
        return (
            backClickCount == 1
                ?
                <View style={[styles.animatedView]}>
                    <Text style={{ ...Fonts.whiteColor13Regular }}>
                        Press back once again to exit
                    </Text>
                </View>
                :
                null
        )
    }
}

const styles = StyleSheet.create({
    animatedView: {
        backgroundColor: "#333333",
        position: "absolute",
        bottom: 20,
        alignSelf: 'center',
        borderRadius: Sizes.fixPadding * 2.0,
        paddingHorizontal: Sizes.fixPadding + 5.0,
        paddingVertical: Sizes.fixPadding,
        justifyContent: "center",
        alignItems: "center",
    },
    tabBarStyle: {
        backgroundColor: Colors.whiteColor,
        height: 65.0,
        elevation: 3.0,
        borderTopColor: '#F2F2F2',
        borderTopWidth: 0.20,
    }
})

export default TabNavigator;


