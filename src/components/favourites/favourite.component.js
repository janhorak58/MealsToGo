import React, { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { Text } from "../typography/text.component";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 222;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={
        isFavourite
          ? () => removeFromFavourites(restaurant)
          : () => addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "black"}
      />
    </FavouriteButton>
  );
};
