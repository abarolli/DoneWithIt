import React, { ReactNode } from "react";

import Constants from "expo-constants";
import { StyleSheet, StyleProp, ViewStyle, View } from "react-native";

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}
function Screen({ children, style }: Props) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
