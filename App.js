import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOsawld,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "./src/components/typography/text.component";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

function MapScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Mapa!</Text>
      </View>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

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
  };
};

export default function App() {
  let [oswaldLoaded] = useOsawld({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
              showLabel: false,
            }}
          >
            <Tab.Screen name="Restaurace" component={RestaurantsScreen} />
            <Tab.Screen name="Mapa" component={MapScreen} />
            <Tab.Screen name="Nastavení" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});
