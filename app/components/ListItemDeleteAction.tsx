import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { SwipeableMethods } from "react-native-gesture-handler/lib/typescript/components/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  progressAnimatedValue: SharedValue<number>;
  dragAnimatedValue: SharedValue<number>;
  swipeable: SwipeableMethods;
  onPress: any;
}

function ListItemDeleteAction({
  progressAnimatedValue,
  dragAnimatedValue,
  swipeable,
  onPress,
}: Props) {
  const actionWidth = 70;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: dragAnimatedValue.value + actionWidth }],
    };
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Reanimated.View style={animatedStyles}>
        <View
          style={{
            backgroundColor: "red",
            width: actionWidth,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons name="trash-can" size={35} color="white" />
        </View>
      </Reanimated.View>
    </TouchableWithoutFeedback>
  );
}

export default ListItemDeleteAction;
