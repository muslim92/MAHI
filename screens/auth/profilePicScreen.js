import React from "react";
import { SafeAreaView, View, StatusBar, TouchableOpacity, Image, ImageBackground, StyleSheet, Text } from "react-native";
import { Colors, Fonts, Sizes } from "../../constants/styles";
import { MaterialIcons } from '@expo/vector-icons';

const ProfilePicScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primaryColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <ImageBackground
                source={require('../../assets/images/bg.png')}
                style={{ flex: 1 }}
            >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={40}
                    color={Colors.whiteColor}
                    style={{ marginHorizontal: Sizes.fixPadding }}
                    onPress={() => navigation.pop()}
                />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.profilePicInfoWrapStyle}>
                        {addPhotoOrLaterInfo()}
                        {profilePicInfo()}
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )

    function profilePicInfo() {
        return (
            <View style={styles.profilePicInfoStyle}>
                {profilePhoto()}
                {galleryOption()}
                {takePhotoOption()}
            </View>
        )
    }

    function addPhotoOrLaterInfo() {
        return (
            <View style={{ marginTop: Sizes.fixPadding, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ ...Fonts.blackColor15SemiBold }}>
                    Add Your Photo
                </Text>
                <Text
                    onPress={() => navigation.push('BottomTabBar')}
                    style={{ ...Fonts.grayColor15SemiBold }}
                >
                    Add it later
                </Text>
            </View>
        )
    }

    function takePhotoOption() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('BottomTabBar')}
                style={{
                    backgroundColor: '#E0F2F1',
                    ...styles.takePhotoAndGalleryOptionsWrapStyle,
                }}>
                <MaterialIcons
                    name="camera-alt"
                    size={27}
                    color="black"
                />
                <Text style={{ ...Fonts.blackColor11Bold }} >
                    Take Photo
                </Text>
            </TouchableOpacity >
        )
    }

    function galleryOption() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('BottomTabBar')}
                style={{
                    backgroundColor: '#F1F8E9',
                    ...styles.takePhotoAndGalleryOptionsWrapStyle,
                }}>
                <MaterialIcons
                    name="photo-library"
                    size={27}
                    color="black"
                />
                <Text style={{ ...Fonts.blackColor11Bold }} >
                    Gallery
                </Text>
            </TouchableOpacity >
        )
    }

    function profilePhoto() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.push('BottomTabBar')}
                style={styles.profilePhotoWrapStyle}>
                <Image
                    source={require('../../assets/images/icons/grayprofile.png')}
                    style={{ width: 30.0, height: 30.0 }}
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    takePhotoAndGalleryOptionsWrapStyle: {
        elevation: 3.0,
        height: 70.0,
        width: 70.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePhotoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        elevation: 3.0,
        height: 70.0,
        width: 70.0,
        borderRadius: 35.0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePicInfoStyle: {
        marginVertical: Sizes.fixPadding * 2.0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profilePicInfoWrapStyle: {
        backgroundColor: Colors.whiteColor,
        borderRadius: Sizes.fixPadding - 5.0,
        marginHorizontal: Sizes.fixPadding * 2.0,
        padding: Sizes.fixPadding * 2.0,
    }
})

export default ProfilePicScreen;