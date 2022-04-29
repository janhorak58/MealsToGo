import React, { useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AnimatedLottieView from "lottie-react-native";
import styled from "styled-components/native";

const AnimationWrapper = styled.View`
  height: 50%;
  top: -50px;
  width: 100%;
  flex: 0.3;
`;

export const AccountScreen = ({ navigation }) => {
  const { isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          color={Colors.blue800}
          size="large"
        />
      ) : (
        <>
          <AnimationWrapper>
            <AnimatedLottieView
              autoPlay
              loop={false}
              source={require("../../../../assets/watermelon.json")}
              resizeMode="cover"
              key={"animation"}
            />
          </AnimationWrapper>
          <AccountCover />

          <AccountContainer>
            <AuthButton
              onPress={() => navigation.navigate("Login")}
              icon="lock-open-outline"
              mode="contained"
            >
              Přihlásit se
            </AuthButton>
            <AuthButton
              onPress={() => navigation.navigate("Register")}
              icon="account-plus-outline"
              mode="contained"
            >
              Vytvořit nový účet
            </AuthButton>
          </AccountContainer>
        </>
      )}
    </AccountBackground>
  );
};
