import React, { useRef, useState, useCallback } from "react";
import { SafeAreaView, View, BackHandler, StatusBar, StyleSheet, TouchableOpacity, Image, Text, ImageBackground } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
import { useFocusEffect } from "@react-navigation/native";

const OnboardingScreen = ({ navigation }) => {

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
        updateState({ backClickCount: 1 });
        setTimeout(() => {
            updateState({ backClickCount: 0 })
        }, 1000)
    }

    const [state, setState] = useState({
        currentIndex: 0,
        backClickCount: 0
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const {
        currentIndex,
        backClickCount
    } = state;

    const swiperRef = useRef();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={{ flex: 1 }}
            >
                <Swiper
                    ref={swiperRef}
                    onIndexChanged={onIndexChanged.bind(this)}
                    index={currentIndex}
                    style={styles.wrapper}
                    showsButtons={false}
                    showsPagination={false}
                    autoplay={true}
                    autoplayTimeout={3.5}
                >
                    {page1()}
                    {page2()}
                </Swiper>
                {
                    currentIndex == 0 ?
                        <Text
                            onPress={() => { navigation.push('Signin') }}
                            style={styles.skipTextStyle}
                        >
                            Skip
                        </Text>
                        :
                        null
                }

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        if (currentIndex == 0) {
                            swiperRef.current.scrollBy(1, true)
                            onIndexChanged.bind(this)
                        }
                        else {
                            navigation.push('Signin');
                        }
                    }}
                    style={styles.forwardButtonWrapStyle}
                >
                    <MaterialIcons
                        name="arrow-forward"
                        color={Colors.primaryColor}
                        size={25}
                    />
                </TouchableOpacity>
            </ImageBackground>
            {
                backClickCount == 1
                    ?
                    <View style={[styles.animatedView]}>
                        <Text style={{ ...Fonts.whiteColor13Regular }}>
                            Press Back Once Again to Exit
                        </Text>
                    </View>
                    :
                    null
            }
        </SafeAreaView >
    )

    function onIndexChanged(index) {
        updateState({
            currentIndex: index
        });
    }

    function page2() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginBottom: Sizes.fixPadding * 7.0, }}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{ width: 120.0, height: 100.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                        Find The Best Match
                    </Text>
                    <Text style={{ marginTop: Sizes.fixPadding - 5.0, textAlign: 'center', ...Fonts.whiteColor14Regular }}>
                        {`Search your best match\nusing customized or predefined\nfilters`}
                    </Text>
                </View>
            </View>
        )
    }

    function page1() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginBottom: Sizes.fixPadding * 7.0, }}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={{ width: 120.0, height: 100.0 }}
                        resizeMode="contain"
                    />
                    <Text style={{ ...Fonts.whiteColor18SemiBold }}>
                        Many Culture Many Religion
                    </Text>
                    <Text style={{ marginTop: Sizes.fixPadding - 5.0, textAlign: 'center', ...Fonts.whiteColor14Regular }}>
                        {`Find the perfect partner from\nyour religion`}
                    </Text>
                </View>
            </View>
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
    headerWrapStyle: {
        flexDirection: 'row',
        height: 56.0,
        alignItems: 'center',
        paddingLeft: Sizes.fixPadding,
        paddingRight: Sizes.fixPadding * 2.0,
    },
    forwardButtonWrapStyle: {
        position: 'absolute',
        bottom: 20.0,
        right: 20.0,
        width: 45.0, height: 45.0,
        borderRadius: 22.5,
        backgroundColor: Colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {},
    skipTextStyle: {
        position: 'absolute',
        left: 20.0,
        bottom: 30.0,
        ...Fonts.whiteColor15Bold
    }
})

export default OnboardingScreen;