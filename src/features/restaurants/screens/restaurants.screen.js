import React, { useContext, useState } from "react";
import { FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Text } from "../../../components/typography/text.component";
import { Search } from "../components/search.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { FadeInView } from "../../../components/animations/fade.animation";
const AlertText = styled(Text)`
  text-align: center;
  margin-top: 250px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  left: 50%;
  top: 45%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -40px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const [showFavourites, setShowFavourites] = useState(false);

  const { restaurants, loading, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);

  return (
    <SafeArea>
      <Search
        setShowFavourites={() => setShowFavourites(!showFavourites)}
        showFavourites={showFavourites}
      />
      {showFavourites && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {error ? (
        <AlertText variant={"error"}>{error}</AlertText>
      ) : loading ? (
        <LoadingContainer>
          <Loading size={80} color={"#303740"} />
        </LoadingContainer>
      ) : (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
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
