import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../configs/styles";
import IconTypes from "../configs/icons";
import colors from "../configs/colors";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

interface Props {
  icon?: IconTypes;
  placeholder: string;
  onSelection: any;
}

const items = [
  {
    title: "Item1",
    value: "1",
  },
  {
    title: "Item2",
    value: "2",
  },
  {
    title: "Item3",
    value: "3",
  },
];

function AppPicker({ icon, placeholder, onSelection }: Props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selection, setSelection] = useState("");

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>{selection ? selection : placeholder}</Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <PickerItem
                title={item.title}
                value={item.value}
                onPress={() => {
                  setSelection(item.title);
                  onSelection(item);
                  setModalVisible(false);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
  textInput: {
    ...defaultStyles.text,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
