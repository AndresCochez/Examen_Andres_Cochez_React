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
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          marginTop: 100,
          marginBottom: 20,
        }}
      >
        Mystery Package
      </Text>

      {/* Afbeelding van het mysteriepakket */}
      <Image
        source={require("../../assets/images/mystery_package.png")}
        style={{ width: 350, height: 350, borderRadius: 10, borderColor: "#d54e21", borderWidth: 5 }}
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
        Welcome to our Mystery Food App! Embark on a culinary adventure with our surprise food packages. Let the flavors unfold and the excitement begin!
      </Text>

      {/* Knop voor navigatie naar het startscherm */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "#d54e21",
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