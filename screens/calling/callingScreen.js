import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Image, TouchableOpacity, TextInput, ImageBackground, StyleSheet } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const CallingScreen = ({ navigation }) => {

    const [state, setState] = useState({
        message: '',
    })

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const { message } = state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/users/user11.png')}
                style={{ flex: 1, }}
            >
                {header()}
                {callingInfo()}
                {typeMessageInfo()}
            </ImageBackground>
        </SafeAreaView>
    )

    function typeMessageInfo() {
        return (
            <View style={styles.typeMessageWrapStyle}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="insert-emoticon" size={15} color={Colors.grayColor} />
                    <TextInput
                        selectionColor={Colors.primaryColor}
                        value={message}
                        onChangeText={(text) => updateState({ message: text })}
                        placeholder='Type your message'
                        style={{ marginLeft: Sizes.fixPadding, ...Fonts.blackColor13Regular, flex: 1, }}
                        placeholderTextColor={Colors.grayColor}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <MaterialIcons name="attach-file" size={15} color={Colors.grayColor} />
                    <MaterialIcons
                        name="photo-camera"
                        size={15}
                        color={Colors.grayColor}
                        style={{ marginHorizontal: Sizes.fixPadding }}
                    />
                    <View style={styles.micIconWrapStyle}>
                        <MaterialIcons name="mic" size={13} color={Colors.grayColor} />
                    </View>
                </View>
            </View>
        )
    }

    function callingInfo() {
        return (
            <View style={styles.callingInfoWrapStyle}>
                <Image
                    source={require('../../assets/images/users/user1.png')}
                    style={{ width: 110.0, height: 105.0, borderRadius: Sizes.fixPadding - 5.0 }}
                />
                <View style={{ marginTop: Sizes.fixPadding * 3.0, marginBottom: Sizes.fixPadding, flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.pop()}
                    >
                        {callingOptions({
                            backgroundColor: '#E6E6E6',
                            icon: <MaterialIcons name="mic-off" color={Colors.blackColor} size={24} />
                        })}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.pop()}
                        style={{ marginHorizontal: Sizes.fixPadding }}
                    >
                        {callingOptions({
                            backgroundColor: '#F44336',
                            icon: <MaterialCommunityIcons name="phone-hangup" size={24} color={Colors.whiteColor} />
                        })}
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.pop()}
                    >
                        {callingOptions({
                            backgroundColor: '#2196F3',
                            icon: <MaterialIcons name="videocam" color={Colors.whiteColor} size={24} />
                        })}
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function callingOptions({ backgroundColor, icon }) {
        return (
            <View style={{
                backgroundColor,
                ...styles.callingOptionsWrapStyle,
            }}>
                {icon}
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
                <MaterialIcons name="more-vert" size={24} color="black" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        height: 56.0,
        marginLeft: Sizes.fixPadding - 5.0,
        marginRight: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    typeMessageWrapStyle: {
        position: 'absolute',
        bottom: 0.0,
        left: 0.0,
        right: 0.0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.whiteColor,
        paddingVertical: Sizes.fixPadding - 3.0,
        paddingHorizontal: Sizes.fixPadding * 2.0
    },
    micIconWrapStyle: {
        backgroundColor: Colors.whiteColor,
        width: 18.0, height: 18.0,
        borderRadius: 9.0,
        elevation: 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#f0f0f0',
        borderWidth: 1.0,
        marginRight: Sizes.fixPadding,
    },
    callingInfoWrapStyle: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 50.0,
        left: 0.0,
        right: 0.0,
    },
    callingOptionsWrapStyle: {
        width: 40.0,
        height: 40.0,
        borderRadius: 20.0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CallingScreen;