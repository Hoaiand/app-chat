import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextComponent from "../../components/TextComponent";
import { COLORS, APPINFOS } from "../../constants";
import { globalStyles } from "../../styles/globalStyle";
import ButtonComponent from "../../components/ButtonComponent";
import HeaderComponent from "../../components/HeaderComponet";

const UserScreen = () => {
    return (
        <View style={globalStyles.container} >
            <HeaderComponent
                style={{
                    flexDirection: "row",
                    backgroundColor: COLORS.primary,
                    height: APPINFOS.sizes.HEIGHT * 0.06,
                    alignItems: "center",
                    paddingLeft: 16,
                    justifyContent: "space-between",

                }}
                title="Thong tin tai khoan"
                fontFamily={"medium"}
                color={COLORS.white}
                size={18}
            />

        </View>
    )
}
const styles = StyleSheet.create({
    inputsContainer: {
        justifyContent: "center",
        alignItems: "center",
    },

});

export default UserScreen;