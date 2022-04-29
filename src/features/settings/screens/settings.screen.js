import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../../src/components/utility/safe-area.component";
import { View } from "react-native";
import { AuthButton } from "../../account/components/account.styles";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: 16px;
`;

const AvatarWrapper = styled.View`
  align-items: center;
  margin-top: 25px;
  margin-bottom: 30px;
  justify-content: space-between;
  flex: 0.4;
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState("");
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture();
  });

  return (
    <SafeArea>
      <AvatarWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {photo ? (
            <Avatar.Image
              size={120}
              source={{ uri: photo }}
              backgroundColor="#2182bd"
            />
          ) : (
            <Avatar.Icon size={120} icon="human" backgroundColor="#2182bd" />
          )}
        </TouchableOpacity>
        <Text>{user.email}</Text>
      </AvatarWrapper>
      <List.Section>
        <SettingsItem
          title="Oblíbené"
          left={(props) => (
            <List.Icon {...props} color="black" icon="heart-outline" />
          )}
          onPress={() => navigation.navigate("Favourites")}
          description="Prohlédni si své oblíbence :-)"
        />

        <SettingsItem
          title="Odhlásit se"
          left={(props) => (
            <List.Icon
              {...props}
              color="black"
              icon="account-arrow-right-outline"
            />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
