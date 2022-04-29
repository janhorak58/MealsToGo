import React from "react";
import { Text } from "../typography/text.component";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { View } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { TouchableOpacity } from "react-native";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouritesBar = ({ favourites = {}, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.length ? (
          favourites.map((restaurant) => (
            <View key={restaurant.name} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text>Zatím nemáš žádné oblíbence</Text>
        )}
      </ScrollView>
    </FavouritesWrapper>
  );
};
