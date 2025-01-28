import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Props {
  label: string;
  value: string;
  onPress: (event: GestureResponderEvent) => void;
}

function PickerItem({ label, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: { padding: 20 },
});

export default PickerItem;
