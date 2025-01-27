import colors from "./colors";
import { Platform } from "react-native";

export default {
  text: {
    color: colors.secondary,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
