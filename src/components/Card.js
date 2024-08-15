import React, { useState } from "react";
import { FlatList, Text, View, Image, Pressable, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { List } from "../Constant";
import { useNavigation } from "@react-navigation/native";

// Functiecomponent voor het weergeven van een raster met kaarten
const Card = () => {
  // React Navigation-hook om toegang te krijgen tot het navigatie-object
  const navigation = useNavigation();

  // State om de gesorteerde lijst van kaarten te beheren
  const [sortedList, setSortedList] = useState(List);
  // State om de sorteervolgorde bij te houden (oplopend of aflopend)
  const [sortOrder, setSortOrder] = useState("asc");
  // State om bij te houden welke indexes zijn aangeklikt voor favorietentoggelen
  const [clickedIndexes, setClickedIndexes] = useState([]);

  // Functie om de favorietstatus van een kaart te wijzigen op basis van de index
  const toggleFavorite = (index) => {
    // Maak een kopie van de gesorteerde lijst
    const updatedList = [...sortedList];
    // Wissel de isFavorite-eigenschap van de geselecteerde kaart
    updatedList[index].isFavorite = !updatedList[index].isFavorite;

    // Als de index niet in clickedIndexes zit, voeg deze toe
    if (!clickedIndexes.includes(index)) {
      setClickedIndexes([...clickedIndexes, index]);
    }

    // Werk de gesorteerde lijst in de state bij
    setSortedList(updatedList);
  };

  // Sorteer de kaarten op basis van prijs en werk de gesorteerde lijst bij
  const sortCards = (order) => {
    // Maak een gesorteerde kopie van de oorspronkelijke lijst op basis van prijs
    const sorted = [...List].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return order === "asc" ? priceA - priceB : priceB - priceA;
    });

    // Werk de gesorteerde lijst bij met de isFavorite-status van de oorspronkelijke lijst
    const updatedSorted = sorted.map((item) => {
      const originalItem = clickedIndexes.includes(item.id)
        ? sortedList.find((original) => original.id === item.id)
        : item;
      return { ...item, isFavorite: originalItem ? originalItem.isFavorite : false };
    });

    // Werk de gesorteerde lijst en sorteervolgorde in de state bij
    setSortedList(updatedSorted);
    setSortOrder(order);
  };

  // Navigeer naar het Favorieten scherm met de huidige favorieten
  const navigateToFavorites = () => {
    const favorites = sortedList.filter((item) => item.isFavorite);
    navigation.navigate("Favorites", { favorites });
  };

  // Render de component
  return (
    <View>
      {/* Favorieten-icoon met indrukfunctionaliteit */}
      <View style={{ marginTop: -25, marginLeft: 350, marginVertical: 10 }}>
        <Pressable onPress={navigateToFavorites}>
          <FontAwesomeIcon icon={faHeart} size={25} style={{ color: "black" }} />
        </Pressable>
      </View>

      {/* Knoppen voor het sorteren van de kaarten */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button title="Lowest" onPress={() => sortCards("asc")} color="black" />
        <Button title="Highest" onPress={() => sortCards("desc")} color="black" />
      </View>

      {/* FlatList voor het weergeven van het kaartenraster */}
      <FlatList
        data={sortedList}
        renderItem={({ item, index }) => (
          // Drukcontainer voor elke kaart met voorwaardelijke navigatie
          <Pressable
            onPress={({ nativeEvent }) => {
              // Controleer of het klikdoel een afbeelding is en navigeer dienovereenkomstig
              if (nativeEvent.target && nativeEvent.target.className === "image") {
                navigation.navigate("Detail", { item: item });
              }
            }}
            style={{
              backgroundColor: "#1821A0",
              borderRadius: 10,
              marginVertical: 8,
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginTop: 12,
              position: "relative",
            }}
          >
            {/* Drukcontainer voor het wijzigen van de favorietstatus */}
            <Pressable
              onPress={() => toggleFavorite(index)}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 1,
              }}
              className="heart-icon"
            >
              {/* FontAwesome-icoon voor hart met dynamische kleur en grootte */}
              <FontAwesomeIcon
                icon={faHeart}
                size={item.isFavorite ? 20 : 20}
                style={{ color: item.isFavorite ? "white" : "black" }}
              />
            </Pressable>

            {/* Drukcontainer voor navigeren naar het Detail-scherm bij het klikken op de afbeelding */}
            <Pressable
              onPress={() => navigation.navigate("Detail", { item: item })}
              className="image"
            >
              {/* Afbeeldingscomponent voor het weergeven van de kaartafbeelding */}
              <Image
                source={item.image}
                style={{ width: 150, height: 180, resizeMode: "center" }}
              />
            </Pressable>

            {/* Tekstcomponenten voor het weergeven van kaartnaam en prijs */}
            <Text style={{ color: "white" }}>{item.name}</Text>
            <Text style={{ color: "white" }}>{"€" + item.price}</Text>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Card;