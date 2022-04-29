import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";

const AlertText = styled.Text`
  text-align: center;
  margin-top: 250px;
`;

const FavouritesList = styled.FlatList.attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      {!favourites.length ? (
        <AlertText variant={"error"}>Zatím nemáš žádné oblíbence</AlertText>
      ) : (
        <FavouritesList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: item })
                }
              >
                <FadeInView duration={2000}>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
