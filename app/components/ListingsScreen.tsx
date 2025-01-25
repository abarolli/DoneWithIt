import React, { useState } from "react";

import Screen from "./Screen";
import Card from "./Card";
import { FlatList, StyleSheet } from "react-native";
import AppButton from "./AppButton";

function ListingsScreen() {
  const [listings, setListings] = useState([
    {
      id: 1,
      image: require("../../assets/jacket.jpg"),
      title: "Red jacket for sale!",
      price: "$100",
    },
    {
      id: 2,
      image: require("../../assets/couch.jpg"),
      title: "Couch in great condition",
      price: "$1000",
    },
  ]);
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card image={item.image} title={item.title} subTitle={item.price} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "ghostwhite",
    padding: 25,
  },
});

export default ListingsScreen;
