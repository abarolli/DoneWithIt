import React from "react";
import Screen from "./Screen";
import ListItem from "./ListItem";
import { FlatList, StyleSheet, View } from "react-native";
import IconListItem from "./IconListItem";
import IconTypes from "../configs/icons";
import colors from "../configs/colors";
import ListItemSeparator from "./ListItemSeparator";

function MyAccountScreen() {
  const iconSize = 25;
  const accountOptions = [
    {
      title: "My Listings",
      icon: "format-list-bulleted" as IconTypes,
      color: colors.primary,
    },
    {
      title: "My Messages",
      icon: "email" as IconTypes,
      color: colors.secondary,
    },
    {
      title: "My Settings",
      icon: "cog" as IconTypes,
      color: "dodgerblue",
    },
    {
      title: "My Friends",
      icon: "human-handsup" as IconTypes,
      color: "orange",
    },
    {
      title: "Log Out",
      icon: "logout" as IconTypes,
      color: "#ffe66d",
    },
  ];
  return (
    <Screen style={styles.screen}>
      <ListItem
        image={require("../../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="programmingwithmosh@gmail.com"
        onPress={() => {}}
        style={styles.user}
      />
      <View>
        <FlatList
          data={accountOptions.slice(0, accountOptions.length - 1)}
          keyExtractor={(option) => option.title}
          renderItem={({ item }) => (
            <IconListItem
              name={item.icon}
              size={iconSize}
              title={item.title}
              color={item.color}
              style={styles.accountOptions}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          ListFooterComponent={() => (
            <IconListItem
              name={accountOptions[accountOptions.length - 1].icon}
              size={iconSize}
              title={accountOptions[accountOptions.length - 1].title}
              color={accountOptions[accountOptions.length - 1].color}
              style={styles.accountOptions}
            />
          )}
          ListFooterComponentStyle={{
            marginTop: 20,
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "ghostwhite",
  },
  user: {
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 40,
  },
  accountOptions: {
    backgroundColor: "white",
  },
});
export default MyAccountScreen;
