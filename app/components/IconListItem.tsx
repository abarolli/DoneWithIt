import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

import IconTypes from "../configs/icons";
import colors from "../configs/colors";

interface Props {
  name: IconTypes;
  size: number;
  title: string;
  color: string;
  style?: StyleProp<ViewStyle>;
}

function IconListItem({ name, size, title, color, style }: Props) {
  const width = size * 2;
  const height = size * 2;

  return (
    <TouchableHighlight underlayColor={colors.lightGrey} onPress={() => {}}>
      <View style={[styles.container, style]}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: color, borderRadius: height / 2, height, width },
          ]}
        >
          <MaterialCommunityIcons name={name} size={size} color="white" />
        </View>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});

export default IconListItem;
