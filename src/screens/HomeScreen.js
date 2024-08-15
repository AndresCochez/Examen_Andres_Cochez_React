import { View, Text, SafeAreaView } from "react-native";
import React from "react";

// Component voor het weergeven van het startscherm met kaarten
import Card from "../components/Card";

// HomeScreen-component voor de hoofdweergave van de app
const HomeScreen = () => {
  // Render de component
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* Veilige weergavegebied voor iOS met marge aan de zijkanten */}
      <View style={{ marginTop: 22, flex: 1 }}>
        {/* Tekstkop voor het startscherm */}
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Choose your Car!</Text>
        
        {/* Card-component voor het weergeven van kaarten */}
        <Card />
      </View>
    </SafeAreaView>
  );
};

// Exporteer de HomeScreen-component
export default HomeScreen;