import React, { useContext, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const myerror = error !== null ? error.split("/")[1].split(")")[0] : "";
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          onPress={() => navigation.navigate("Main")}
          icon="home"
          mode="outline"
        >
          Zpět
        </AuthButton>
        <TextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          label="Heslo"
          value={password}
          textContentType="password"
          secureTextEntry
          onChangeText={(p) => setPassword(p)}
        />

        {myerror !== "" && (
          <ErrorContainer>
            <Text variant="error">{myerror}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          onPress={() => onLogin(email, password)}
          mode="contained"
          icon="arrow-right-thick"
          loading={isLoading}
          disabled={isLoading}
        >
          Přihlásit se
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
