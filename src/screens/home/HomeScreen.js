import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import HeaderComponent from "../../components/HeaderComponet";
import { COLORS, APPINFOS } from "../../constants";
import { globalStyles } from "../../styles/globalStyle";

const HomeScreen = () => {
  const navigation = useNavigation();

  const conversations = [
    { id: '1', name: 'Chat 1', lastMessage: 'Hello', image: 'https://lab2cn.s3.ap-southeast-1.amazonaws.com/011710127222531.jpg', time: '10:00 AM', status: 'Đang hoạt động' },
    { id: '2', name: 'Chat 2', lastMessage: 'Hi', image: 'https://example.com/image2.png', time: '11:00 AM', status: 'Đang hoạt động' },
    // Add more conversations here
  ];

  const handlePress = (conversation) => {
    navigation.navigate('MessageScreen', { conversation });
  }

  return (
    <View style={globalStyles.container}>
      <HeaderComponent
        style={{
          flexDirection: "row",
          backgroundColor: COLORS.primary,
          height: APPINFOS.sizes.HEIGHT * 0.06,
          alignItems: "center",
          paddingLeft: 16,
          justifyContent: "space-between",
        }}
        title="Trang chủ"
        fontFamily={"medium"}
        color={COLORS.white}
        size={18}
      />
      <FlatList
        data={conversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={[styles.conversation, { borderBottomColor: COLORS.gray5 }]}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <View style={styles.messageContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.lastMessage}>{item.lastMessage}</Text>
                </View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  conversation: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  image: {
    width: APPINFOS.sizes.HEIGHT * 0.1,
    height: APPINFOS.sizes.HEIGHT * 0.1,
    borderRadius: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  messageContainer: {
    flexDirection: 'column',
  },
  name: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: COLORS.gray4,
  },
  time: {
    color: COLORS.gray4,
    fontSize: 12,
  },
});

export default HomeScreen;