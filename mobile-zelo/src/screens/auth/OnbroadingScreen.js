import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import Swiper from "react-native-swiper";
import { globalStyles } from "../../styles/globalStyle";
import { APPINFOS, COLORS } from "../../constants";
import ButtonComponent from "../../components/ButtonComponent";


const OnbroadingScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        loop={false}
        onIndexChanged={(num) => setIndex(num)}
        index={index}
        activeDotColor={COLORS.primary}
      >
        <Image
          source={require("../../assets/images/onboarding-1.jpg")}
          style={{
            width: APPINFOS.sizes.WIDTH,
            height: APPINFOS.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-2.jpg")}
          style={{
            width: APPINFOS.sizes.WIDTH,
            height: APPINFOS.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-3.jpg")}
          style={{
            width: APPINFOS.sizes.WIDTH,
            height: APPINFOS.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-4.jpg")}
          style={{
            width: APPINFOS.sizes.WIDTH,
            height: APPINFOS.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../assets/images/onboarding-5.jpg")}
          style={{
            width: APPINFOS.sizes.WIDTH,
            height: APPINFOS.sizes.HEIGHT,
            resizeMode: "contain",
          }}
        />
      </Swiper>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <ButtonComponent title="Đăng nhập" onPress={() => {}} />
        <ButtonComponent title="Taọ tài khoản mới" onPress={() => {}} />
      </View>
    </View>
  );
};

export default OnbroadingScreen;
