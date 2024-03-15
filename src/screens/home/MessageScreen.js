import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, APPINFOS } from "../../constants";
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from "../../components/HeaderComponet";
import { globalStyles } from "../../styles/globalStyle";
import { Ionicons } from '@expo/vector-icons';


const MessageScreen = ({ route }) => {
    const navigation = useNavigation();
    const { conversation } = route.params;
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { id: Date.now().toString(), text: newMessage, sender: 'me' }]);
            setNewMessage('');
        }
    }

    const handleOpenImagePicker = () => {
        // Open image picker here
    }

    const handleOpenEmojiPicker = () => {
        // Open emoji picker here
    }
    return (
        <View style={globalStyles.container}>
            <View style={{
                flexDirection: "row",
                backgroundColor: COLORS.primary,
                height: APPINFOS.sizes.HEIGHT * 0.06,
                alignItems: "center",
                paddingHorizontal: 16,
                justifyContent: "space-between",
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: COLORS.white, fontSize: 18 }}>{conversation.name}</Text>
                        <Text style={{ color: COLORS.white, fontSize: 14 }}>{conversation.status}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => {/* Handle call action here */ }} style={{ marginRight: 10 }}>
                        <Ionicons name="call" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {/* Handle settings action here */ }}>
                        <Ionicons name="menu" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: COLORS.gray5 }}>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.theirMessage]}>
                            <Text style={styles.messageText}>{item.text}</Text>
                        </View>
                    )}
                />
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity onPress={handleOpenImagePicker}>
                    <Ionicons name="image" size={24} color="yourColorHere" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenEmojiPicker}>
                    <Ionicons name="happy" size={24} color="yourColorHere" />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={newMessage}
                    onChangeText={setNewMessage}
                    placeholder="Nhập tin nhắn..."
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                    <Text style={styles.sendButtonText}>Gửi</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    header: {
        backgroundColor: COLORS.primary,
        height: APPINFOS.sizes.HEIGHT * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    backButton: {
        color: COLORS.white,
        fontSize: 16,
    },
    headerTitle: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    messageContainer: {
        maxWidth: '80%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,

    },
    myMessage: {
        backgroundColor: COLORS.primary,
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    theirMessage: {
        backgroundColor: COLORS.lightGray,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    messageText: {
        color: COLORS.white,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
    },
    sendButtonText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
});

export default MessageScreen;