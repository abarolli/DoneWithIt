import React from "react";
import { View } from "react-native";
import Card from "./Card";
import ListItem from "./ListItem";
import AppButton from "./AppButton";

function ListingDetailsScreen() {
  return (
    <View>
      <Card
        title="Red jacket for sale"
        subTitle="$100"
        image={require("../../assets/jacket.jpg")}
      />
      <ListItem
        image={require("../../assets/mosh.jpg")}
        title="Mosh Hamedani"
        subTitle="3 Listings"
      />
      <AppButton>Contact</AppButton>
    </View>
  );
}

export default ListingDetailsScreen;
