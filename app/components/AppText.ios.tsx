import React, { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

function AppText({ children }: Props) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 20,
    fontFamily: "Avenir",
  },
});

export default AppText;
