import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import colors from "../configs/colors";

interface Props {
  title: string;
  color?: string;
  onPress: (event: GestureResponderEvent) => void;
}

function AppButton({ title, color = colors.primary, onPress }: Props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: color || styles.button.backgroundColor,
      }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
