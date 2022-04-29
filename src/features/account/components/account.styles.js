import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
// source: require("../../../../assets/home_bg.jpg"),

export const AccountBackground = styled.ImageBackground.attrs({
  source: {
    uri: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  background-color: #eaeaea3a;
`;

export const AccountContainer = styled.View`
  background-color: #eaeaeaea;
  padding: 50px 20px;
  margin-top: 10px;
  width: 80%;
  border-radius: 20px;
  justify-content: center;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 40px;
`;

export const ErrorContainer = styled.View`
  width: 100%;
  padding: 10px 5px;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;
