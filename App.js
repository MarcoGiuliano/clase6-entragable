import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import CategoriesScreen from "./Screens/CategoriesScreen";
import { useState } from "react";
import Products from "./Screens/Products";
import { useFonts } from "expo-font";

export default function App() {
  const [categorySelected, setcategorySelected] = useState(null);

  const handleCategory = (category) => {
    setcategorySelected(category);
  };

  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      {categorySelected ? (
        <Products category={categorySelected} />
      ) : (
        <CategoriesScreen handleCategory={handleCategory} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
