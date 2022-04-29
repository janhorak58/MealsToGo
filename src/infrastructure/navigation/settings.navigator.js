import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React, { useEffect } from "react";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: "Nastavení",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
