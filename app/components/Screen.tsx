import React, { ReactNode } from "react";

import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
function Screen({ children, style }: Props) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
