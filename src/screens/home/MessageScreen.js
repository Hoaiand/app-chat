

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { globalStyles } from "../../styles/globalStyle";
import { COLORS, APPINFOS } from "../../constants";

const MessageScreen = () => {
    const route = useRoute();
    const { conversation } = route.params;

    return (
        <View style={globalStyles.container}>
            <View style={styles.header}>
                <Image source={{ uri: conversation.image }} style={styles.image} />
                <Text style={styles.name}>{conversation.name}</Text>
            </View>
            {/* Placeholder for chat messages */}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    image: {
        width: APPINFOS.sizes.HEIGHT * 0.1,
        height: APPINFOS.sizes.HEIGHT * 0.1,
        borderRadius: 50,
        marginRight: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default MessageScreen;
