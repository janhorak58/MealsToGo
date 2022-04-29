import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "../../../src/components/typography/text.component";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { AuthButton } from "../../features/account/components/account.styles";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurace: "restaurant",
  Restaurace_o: "restaurant-outline",
  Mapa: "map",
  Mapa_o: "map-outline",
  Nastavení: "ios-settings",
  Nastavení_o: "ios-settings-outline",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name + "_o"];
  const focusedIconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons
        name={focused ? focusedIconName : iconName}
        size={size}
        color={color}
      />
    ),
    tabShowLabel: false,
    headerShown: false,

    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarShowLabel: false,
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurace" component={RestaurantsNavigator} />
            <Tab.Screen name="Mapa" component={MapScreen} />
            <Tab.Screen name="Nastavení" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
