import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ErrorContainer,
} from "../components/account.styles";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  const myerror = error !== null ? error.split("/")[1].split(")")[0] : "";
  return (
    <AccountBackground>
      <AccountCover />
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

        <TextInput
          label="Heslo - znovu"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {myerror !== "" && (
          <ErrorContainer>
            <Text variant="error">{myerror}</Text>
          </ErrorContainer>
        )}
        <AuthButton
          onPress={() => onRegister(email, password, repeatedPassword)}
          mode="contained"
          icon="plus"
          loading={isLoading}
          disabled={isLoading}
        >
          Vytvořit účet
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
