import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[3]} 0;
`;

export const RestaurantCardCover = styled(Card.Cover)``;

export const Info = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center

  padding: ${(props) => props.theme.space[2]} 0;
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const RestaurantCardContent = styled(Card.Content)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
`;

export const RestaurantCardText = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
