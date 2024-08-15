import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// WelcomeScreen-component voor het weergeven van het welkomstscherm van de app
const WelcomeScreen = ({ navigation }) => {
  // Render de component
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* Grote tekst voor de app-naam */}
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "black",
          marginTop: 100,
          marginBottom: 20,
        }}
      >
        carshop.
      </Text>

      {/* Afbeelding van het mysteriepakket */}
      <Image
        source={require("../../assets/images/mystery_package.jpg")}
        style={{ width: 350, height: 350, borderRadius: 10, borderColor: "#1821A0", borderWidth: 5 }}
      />

      {/* Tekst met uitleg over de app */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
          marginTop: 20,
          marginBottom: 4,
          marginLeft: 40,
          marginRight: 40,
          textAlign: "justify",
        }}
      >
        Welcome to our Auto App! Explore a world of reliable used cars and find your perfect vehicle. Compare models and be amazed by the options. Your next car is waiting for you!
      </Text>

      {/* Knop voor navigatie naar het startscherm */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#1821A0",
          borderRadius: 10,
          paddingVertical: 16,
          width: 350,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Exporteer de WelcomeScreen-component
export default WelcomeScreen;