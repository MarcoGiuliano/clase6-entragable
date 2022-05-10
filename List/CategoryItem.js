import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colores } from "../Styles/colors";

const CategoryItem = ({ category }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.category}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
    backgroundColor: colores.regularBlue,
    margin: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
  },
});
