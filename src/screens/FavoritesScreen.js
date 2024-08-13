import React from "react";
import { View, Text, FlatList, Image } from "react-native";

// Component voor het weergeven van favoriete items
const FavoritesScreen = ({ route }) => {
  // Extract favoriete items uit de route-parameters
  const { favorites } = route.params;

  // Render de component
  return (
    <View>
      {/* Tekstkop voor het favorietenscherm */}
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10, marginTop: 22, marginHorizontal: 16 }}>
        Favorites
      </Text>

      {/* FlatList voor het weergeven van favoriete items */}
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          // Container voor elk favoriet item met specifieke stijl
          <View
            style={{
              backgroundColor: "#d54e24",
              borderRadius: 10,
              marginVertical: 8,
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginTop: 12,
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            {/* Afbeelding van het favoriete item */}
            <Image source={item.image} style={{ width: 150, height: 180, resizeMode: "center" }} />
            
            {/* Naam van het favoriete item */}
            <Text>{item.name}</Text>

            {/* Prijs van het favoriete item met voorwaardelijke weergave */}
            <Text>{"€" + (item.price ? item.price.toString() : "N/A")}</Text>
          </View>
        )}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Exporteer de FavoritesScreen-component
export default FavoritesScreen;
