import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, APPINFOS } from "../constants";
const ButtonComponent = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    width: APPINFOS.sizes.WIDTH * 0.8,
    height: APPINFOS.sizes.HEIGHT * 0.08,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: COLORS.white2,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ButtonComponent;
