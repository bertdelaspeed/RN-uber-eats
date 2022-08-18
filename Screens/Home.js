import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import HeaderTabs from "../Components/Home/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../Components/Home/SearchBar";
import Categories from "../Components/Home/Categories";
import RestaurantItems, {
  localRestaurant,
} from "../Components/Home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../Components/Home/BottomTabs";

const YELP_API_KEY =
  "8htQi_6xqOPn-Te6_wc1mcZdKRH2z692GJ1CTI-9WNsQ3LQKjnHugVIyUrzZPffF2fuQefLHK1eUoPDLnYbDvOFqCzpTYxE18Gn2LCo4-ykLAfaByPYwJZb4rl6nYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurant);
  const [city, setCity] = useState("SanFrancisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
    console.log("Resto : ", restaurantData);
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
