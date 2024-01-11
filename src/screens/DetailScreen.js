import React from "react";
import { Image, SafeAreaView, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// DetailScreen-component voor het weergeven van gedetailleerde informatie over een item
const DetailScreen = ({ route }) => {
  // Extraheren van het item-object uit de route-parameters
  const { item } = route.params;
  // Navigatie-hook om toegang te krijgen tot het navigatie-object
  const navigation = useNavigation();

  // Render de component
  return (
    <View style={{ backgroundColor: "#d54e21", flex: 1 }}>
      {/* Veilige weergavegebied voor iOS met lege bovenbalk */}
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
      </SafeAreaView>

      {/* Hoofdgedeelte van het Detailscherm */}
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          marginTop: 360,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        {/* Afbeelding van het item met absolute positionering */}
        <View
          style={{
            height: 350,
            width: 350,
            position: "absolute",
            top: -250,
          }}
        >
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>

        {/* Prijsweergave met dynamische positie en stijl */}
        <Text style={{ marginTop: -240, marginLeft: -250, fontSize: 28, fontWeight: "bold", color: "white" }}>
          {"€" + item.price}
        </Text>

        {/* Naamweergave met dynamische positie en stijl */}
        <Text style={{ marginTop: 320, fontSize: 28, fontWeight: "bold" }}>
          {item.name}
        </Text>

        {/* Scrollview voor het weergeven van de beschrijving van het item */}
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={{ fontSize: 20, marginVertical: 16, marginHorizontal: 22, textAlign: "justify" }}>
              {item.description}
            </Text>
          </ScrollView>
        </View>

        {/* Bestelknop met TouchableOpacity voor navigatie naar het Bestelscherm */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Order")}
            style={{
              backgroundColor: "#d54e21",
              borderRadius: 10,
              paddingVertical: 16,
              width: 350,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Exporteer de DetailScreen-component
export default DetailScreen;