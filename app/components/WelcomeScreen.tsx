import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "./AppButton";

import colors from "../configs/colors";

function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require("../../assets/background.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <AppButton>Login</AppButton>
      <AppButton color={colors.secondary}>Register</AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: "10%",
    alignItems: "center",
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default WelcomeScreen;
