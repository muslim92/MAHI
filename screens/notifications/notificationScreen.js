import React, { useState, useRef } from 'react';
import { Fonts, Colors, Sizes, } from "../../constants/styles";
import {
    Text,
    View,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Animated,
    Dimensions,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Snackbar } from 'react-native-paper';

const { width } = Dimensions.get('screen');

const notificationList = [
    {
        key: '1',
        title: 'Subscription alert!',
        description: 'Your premium plan expired soon. Purchase new premium plan...',
        timeAgo: '1h 20min'
    },
    {
        key: '2',
        title: '3 Profile views',
        description: 'Lorem ipsum dolor sit amet, consectetur adipielit, sed do eiumod tempor',
        timeAgo: '2 days'
    },
    {
        key: '3',
        title: 'Premium plan offer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipielit, sed do eiumod tempor',
        timeAgo: '2 days'
    },
    {
        key: '4',
        title: 'Subscription alert!',
        description: 'Your premium plan expired soon. Purchase new premium plan...',
        timeAgo: '2 month'
    },
];

const rowTranslateAnimatedValues = {};

const NotificationsScreen = ({ navigation }) => {

    const [showSnackBar, setShowSnackBar] = useState(false);

    const [snackBarMsg, setSnackBarMsg] = useState('');

    const [listData, setListData] = useState(notificationList);

    Array(listData.length + 1)
        .fill('')
        .forEach((_, i) => {
            rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
        });

    const animationIsRunning = useRef(false);

    const onSwipeValueChange = swipeData => {

        const { key, value } = swipeData;

        if ((value < -width || value > width) && !animationIsRunning.current) {
            animationIsRunning.current = true;
            Animated.timing(rowTranslateAnimatedValues[key], {
                toValue: 0,
                duration: 200,
                useNativeDriver: false,
            }).start(() => {

                const newData = [...listData];
                const prevIndex = listData.findIndex(item => item.key === key);
                newData.splice(prevIndex, 1);
                const removedItem = listData.find(item => item.key === key);

                setSnackBarMsg(`${removedItem.title} dismissed`);

                setListData(newData);

                setShowSnackBar(true);

                animationIsRunning.current = false;
            });
        }
    };

    const renderItem = data => (
        <Animated.View
            style={[
                {
                    height: rowTranslateAnimatedValues[
                        data.item.key
                    ].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 95],
                    }),
                },
            ]}
        >
            <View style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
                <View style={{
                    marginHorizontal: Sizes.fixPadding * 2.0,
                    marginVertical: Sizes.fixPadding - 5.0,
                }}>
                    <View style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <View style={styles.notificationIconWrapStyle}>
                            <MaterialIcons name="notifications-active" size={25} color={Colors.whiteColor} />
                        </View>
                        <View style={{
                            marginLeft: Sizes.fixPadding,
                            width: width - 140,
                        }}>
                            <Text numberOfLines={1} style={{ ...Fonts.blackColor14SemiBold }}>
                                {data.item.title}
                            </Text>
                            <Text numberOfLines={2} style={{ ...Fonts.grayColor13Regular }}>
                                {data.item.description}
                            </Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: 'right', ...Fonts.grayColor10Regular }}>
                        {data.item.timeAgo} ago
                    </Text>
                </View>
            </View>
        </Animated.View >
    );

    const renderHiddenItem = () => (
        <View style={styles.rowBack}>
        </View>
    );

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <MaterialIcons name="keyboard-arrow-left" size={40} color={Colors.blackColor}
                    onPress={() => navigation.pop()}
                />
                <Text style={{ ...Fonts.blackColor20Bold, marginLeft: Sizes.fixPadding + 5.0, }}>
                    Notifications
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ backgroundColor: Colors.bodyBackColor, flex: 1, }}>
                {header()}
                {listData.length == 0 ?
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text style={{ ...Fonts.grayColor14Bold, marginTop: Sizes.fixPadding }}>
                            No new notification
                        </Text>
                    </View>
                    :
                    <SwipeListView
                        data={listData}
                        renderItem={renderItem}
                        renderHiddenItem={renderHiddenItem}
                        rightOpenValue={-width}
                        leftOpenValue={width}
                        onSwipeValueChange={onSwipeValueChange}
                        useNativeDriver={false}
                        contentContainerStyle={{ paddingVertical: Sizes.fixPadding + 2.0 }}
                    />
                }
                <Snackbar
                    style={styles.snackBarStyle}
                    visible={showSnackBar}
                    onDismiss={() => setShowSnackBar(false)}
                >
                    {snackBarMsg}
                </Snackbar>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        height: 56.0,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: Sizes.fixPadding,
        paddingRight: Sizes.fixPadding * 2.0,
    },
    notificationIconWrapStyle: {
        height: 60.0,
        width: 60.0,
        backgroundColor: Colors.primaryColor,
        borderRadius: 30.0,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.whiteColor,
        borderWidth: 3.0,
        elevation: 4.0,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: Colors.primaryColor,
        flex: 1,
        marginTop: Sizes.fixPadding - 3.0,
        marginBottom: Sizes.fixPadding + 7.0,
    },
    snackBarStyle: {
        position: 'absolute',
        bottom: -10.0,
        left: -10.0,
        right: -10.0,
        backgroundColor: '#333333'
    }
});

export default NotificationsScreen;