import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors from "../configs/colors";

interface Props {
  children: string;
  color?: string;
}

function AppButton({ children, color = undefined }: Props) {
  return (
    <View
      style={{
        ...styles.button,
        backgroundColor: color || styles.button.backgroundColor,
      }}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginBottom: 20,
    padding: 12,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
export default AppButton;
