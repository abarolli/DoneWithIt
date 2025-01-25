import React from "react";
import { Image, StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  image: any;
}

function ViewImageScreen({ image }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.navigationIcons}>
        <MaterialCommunityIcons name="close" size={40} />
        <MaterialCommunityIcons name="trash-can-outline" size={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "80%",
  },
  navigationIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default ViewImageScreen;
