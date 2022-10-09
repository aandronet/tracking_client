import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackScreen from "./HomeScreen";
import AnalysesScreen from "./AnalysesScreen";
import StatsScreen from "./StatsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Stats") {
              iconName = focused ? "bar-chart" : "bar-chart-outline";
            } else if (route.name === "Analyses") {
              iconName = focused ? "analytics-outline" : "analytics";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "cornflowerblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
        <Tab.Screen name="Analyses" component={AnalysesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
