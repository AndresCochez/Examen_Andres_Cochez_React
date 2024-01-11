import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import OrderScreen from "../screens/OrderScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

// Maak een Stack Navigator aan
const Stack = createNativeStackNavigator();

// AppNavigator-component voor de navigatiestructuur
const AppNavigator = () => {
  return (
    // Navigatiecontainer die de navigatiestatus beheert
    <NavigationContainer>
      {/* Stack Navigator voor het beheren van de schermen in de app */}
      <Stack.Navigator>
        {/* Welkomstscherm */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        {/* Hoofdscherm */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Favorietenscherm */}
        <Stack.Screen name="Favorites" component={FavoritesScreen} />
        {/* Detailscherm */}
        <Stack.Screen name="Detail" component={DetailScreen} />
        {/* Bestelscherm */}
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Exporteer de AppNavigator-component
export default AppNavigator;