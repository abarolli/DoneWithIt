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

export type AppPickerItemType = { label: string; value: string };

interface Props {
  icon?: IconTypes;
  items: AppPickerItemType[];
  placeholder: string;
  onSelection: (item: AppPickerItemType) => void;
  selection?: AppPickerItemType;
}

function AppPicker({
  icon,
  items,
  placeholder,
  selection,
  onSelection,
}: Props) {
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.text}>
            {selection ? selection.label : placeholder}
          </Text>
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
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                value={item.value}
                onPress={() => {
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
