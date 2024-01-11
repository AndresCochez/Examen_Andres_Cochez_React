import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// ChosenScreen-component voor het weergeven van het scherm na het kiezen van een pakket
const ChosenScreen = ({ navigation }) => {
  // Render de component
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* Tekst voor de status van de bestelling */}
      <Text
        style={{
          fontSize: 36,
          fontWeight: "bold",
          color: "black",
          marginTop: 100,
          marginBottom: 20,
        }}
      >
        Pending Order...
      </Text>

      {/* Afbeelding van het mysteriepakket */}
      <Image
        source={require("../../assets/images/mystery_package.png")}
        style={{ width: 350, height: 350, borderRadius: 10, borderColor: "#d54e21", borderWidth: 5 }}
      />

      {/* Tekst met dankbaarheid en informatie over de bestelling */}
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
        Thank you for your order! It's currently being processed. We'll send you an update once it's on its way.
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
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Exporteer de ChosenScreen-component
export default ChosenScreen;