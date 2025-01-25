import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";
import ReanimatedSwipeable, {
  SwipeableMethods,
} from "react-native-gesture-handler/ReanimatedSwipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../../configs/colors";
import { SharedValue } from "react-native-reanimated";

interface Props {
  image: any;
  title: string;
  subTitle: string;
  onPress?: (event: GestureResponderEvent) => void;
  renderRightActions?: (
    progressAnimatedValue: SharedValue<number>,
    dragAnimatedValue: SharedValue<number>,
    swipeable: SwipeableMethods
  ) => React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  style,
}: Props) {
  return (
    <GestureHandlerRootView style={{}}>
      <ReanimatedSwipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.lightGrey} onPress={onPress}>
          <View style={[styles.container, style]}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  detailsContainer: {
    paddingTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 7,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
    fontSize: 14,
    color: "grey",
  },
  subTitle: {
    color: "grey",
  },
});
export default ListItem;
