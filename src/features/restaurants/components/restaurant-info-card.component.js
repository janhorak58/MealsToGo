import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Row,
  Rating,
  RestaurantCardContent,
  RestaurantCardText,
  Icon,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={50}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

      <Info>
        <Row>
          <Text variant="label">{name}</Text>
          <Icon source={{ uri: icon }} />
        </Row>
        <RestaurantCardContent>
          <Row>
            <Rating>
              {ratingArray.map(() => (
                <SvgXml xml={star} width={20} height={20} />
              ))}
            </Rating>
            {isClosedTemporarily && (
              <Text variant="error">Dočasně Zavřeno</Text>
            )}
            {isOpenNow && !isClosedTemporarily && (
              <SvgXml xml={open} width={30} height={30} />
            )}
          </Row>
          <RestaurantCardText>{address}</RestaurantCardText>
        </RestaurantCardContent>
      </Info>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({});
