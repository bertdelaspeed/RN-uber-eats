import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";

YelpRestaurantInfo = {
  name: "Something",
  image:
    "https://uploads.disquscdn.com/images/9ee1ac99c973bdb3131fba4177575bc1953ace62251a2e350affcd49928c7490.png?w=800&h=843",
  price: "$ 14.99",
  rating: 4.6,
  reviews: 1900,
  categories: [{ title: "thai" }, { title: " comfort food" }],
};
const { name, image, price, reviews, rating, categories } = YelpRestaurantInfo;
const formatedCategories = categories.map((cat) => cat.title).join(" . ");
const description = `${formatedCategories} ${
  price ? " . " + price : ""
} . 🎟️ . ${rating} ⭐ (${reviews}+)`;

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
