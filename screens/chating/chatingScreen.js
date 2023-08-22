import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TextInput, SafeAreaView, StatusBar } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Fonts, Colors, Sizes, } from "../../constants/styles";

const { width } = Dimensions.get('screen');

const userMessages = [
    {
        id: '1',
        message: 'Lorem Ipsum is simply dummy text',
        isSender: false,
    },
    {
        id: '2',
        message: 'Lorem Ipsum is simply dummy text of\nthe printing and typesetting industry.',
        isSender: true,
    },
    {
        id: '3',
        message: 'Ok, Ipsum is simply dummy',
        isSender: false,
    },
    {
        id: '4',
        message: 'Ok, Ipsum is simply',
        isSender: false,
    },
    {
        id: '5',
        message: 'Lorem Ipsum is simply dummy text of\nthe printing and typesetting industry.',
        isSender: true,
    },
    {
        id: '6',
        message: 'Lorem Ipsum is simply dummy text',
        isSender: false,
    },
    {
        id: '7',
        message: '....',
        isSender: false,
    },
];

const receiverImage = require('../../assets/images/users/user11.png');

const senderImage = require('../../assets/images/users/user1.png');

const ChatingScreen = ({ navigation }) => {

    const [messagesList, setMessagesList] = useState(userMessages);

    function messages() {

        const renderItem = ({ item, index }) => {
            return (
                <View style={{
                    alignItems: item.isSender == true ? 'flex-end' : 'flex-start',
                    marginHorizontal: Sizes.fixPadding + 10.0,
                    marginVertical: Sizes.fixPadding,
                }}>

                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        {
                            !item.isSender
                                ?
                                index != 0 ?
                                    messagesList[index].isSender == messagesList[index - 1].isSender
                                        ?
                                        <View style={{ marginRight: Sizes.fixPadding * 4.5, }} />
                                        :
                                        <View style={{ marginRight: Sizes.fixPadding, }}>
                                            <Image
                                                source={receiverImage}
                                                style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                                            />
                                            <View style={{ ...styles.senderReceiverActiveStyle, right: 0.0, }} />
                                        </View>
                                    :
                                    messagesList[index].isSender == messagesList[index + 1].isSender || !messagesList[index].isSender
                                        ?
                                        <View style={{ marginRight: Sizes.fixPadding }}>
                                            <Image
                                                source={receiverImage}
                                                style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                                            />
                                            <View style={{ ...styles.senderReceiverActiveStyle, right: 0.0, }} />
                                        </View>
                                        :
                                        null
                                :
                                null

                        }
                        <View style={{
                            ...styles.messageWrapStyle,
                            backgroundColor: item.isSender == true ? Colors.primaryColor : Colors.whiteColor,
                        }}>
                            <Text style={item.isSender ? { ...Fonts.whiteColor13Regular } : { ...Fonts.grayColor13Regular }}>
                                {item.message}
                            </Text>
                        </View>
                        {
                            item.isSender ?
                                index != 0 ?
                                    messagesList[index].isSender == messagesList[index - 1].isSender
                                        ?
                                        <View style={{ marginLeft: Sizes.fixPadding * 4.5 }} />
                                        :
                                        <View style={{ marginLeft: Sizes.fixPadding, }}>
                                            <Image
                                                source={senderImage}
                                                style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                                            />
                                            <View style={{ ...styles.senderReceiverActiveStyle, left: 0.0, }} />
                                        </View>
                                    :
                                    messagesList[index].isSender == messagesList[index + 1].isSender || messagesList[index].isSender
                                        ?
                                        <View style={{ marginLeft: Sizes.fixPadding, }}>
                                            <Image
                                                source={senderImage}
                                                style={{ width: 35.0, height: 35.0, borderRadius: 17.5, }}
                                            />
                                            <View style={{ ...styles.senderReceiverActiveStyle, right: 0.0, }} />
                                        </View>
                                        :
                                        null
                                :
                                null
                        }
                    </View>
                </View>
            )
        }

        return (
            <View style={{ paddingBottom: Sizes.fixPadding * 4.0, marginTop: Sizes.fixPadding - 5.0 }}>
                <FlatList
                    inverted
                    data={messagesList}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        flexDirection: 'column-reverse',
                    }}
                />
            </View>
        )
    }

    function addMessage({ message }) {

        const oldMessages = messagesList;

        const newMessage = {
            id: messagesList.length + 1,
            message: message,
            isSender: true,
        }

        oldMessages.push(newMessage);
        setMessagesList(oldMessages);
    }

    function typeMessage() {
        const [message, setMessage] = useState('');
        return (
            <View style={styles.typeMessageWrapStyle}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons name="insert-emoticon" size={15} color={Colors.grayColor} />
                    <TextInput
                        selectionColor={Colors.primaryColor}
                        value={message}
                        onChangeText={setMessage}
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
                    <MaterialIcons name="photo-camera" size={15} color={Colors.grayColor}
                        style={{ marginHorizontal: Sizes.fixPadding }}
                    />
                    <View style={styles.micIconWrapStyle}>
                        <MaterialIcons name="mic" size={13} color={Colors.grayColor} />
                    </View>
                    <MaterialIcons name="send" size={15} color={Colors.grayColor}
                        onPress={() => {
                            if (message != '') {
                                addMessage({ message: message })
                                setMessage('');
                            }
                        }}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bodyBackColor }}>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <View style={{ flex: 1, }}>
                {header()}
                <View style={{ flex: 1, }}>
                    {messages()}
                    {typeMessage()}
                </View>
            </View>
        </SafeAreaView>
    )

    function header() {
        return (
            <View style={styles.headerWrapStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons
                        name="keyboard-arrow-left"
                        size={40}
                        color="black"
                        onPress={() => navigation.pop()}
                    />
                    <View style={{ maxWidth: width / 1.8, marginLeft: Sizes.fixPadding }}>
                        <Text numberOfLines={1} style={{ ...Fonts.blackColor20Bold }}>
                            Azhar Khan
                        </Text>
                        <Text style={{ ...Fonts.grayColor14SemiBold }}>
                            Online
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialIcons
                        name="phone"
                        size={24}
                        color={Colors.blackColor}
                        style={{ marginRight: Sizes.fixPadding, }}
                        onPress={() => navigation.push('Calling')}
                    />
                    <MaterialIcons
                        name="more-vert"
                        size={24}
                        color={Colors.blackColor}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerWrapStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56.0,
        marginRight: Sizes.fixPadding + 10.0,
        marginLeft: Sizes.fixPadding - 5.0,
    },
    messageWrapStyle: {
        paddingHorizontal: Sizes.fixPadding,
        paddingVertical: Sizes.fixPadding,
        borderRadius: Sizes.fixPadding - 5.0,
        elevation: 3.0,
    },
    senderReceiverActiveStyle: {
        width: 10.0,
        height: 10.0,
        borderRadius: 5.0,
        backgroundColor: Colors.greenColor,
        position: 'absolute',
        bottom: 0.0,
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
    }
})

export default ChatingScreen;