import React from "react";
import { Text, View, ScrollView } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantDetailDropdown } from "../components/restaurant-detail-dropdown.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard small={true} restaurant={restaurant} />
      <ScrollView>
        <RestaurantDetailDropdown restaurant={restaurant} />
      </ScrollView>
    </SafeArea>
  );
};
