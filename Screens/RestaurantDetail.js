import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../Components/RestaurantDetail/About";
import MenuItems from "../Components/RestaurantDetail/MenuItems";

export default function RestaurantDetail() {
  return (
    <View>
      <About />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
