import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CategoryItem from "./categoryItem";
import ProductItem from "./ProductItem";

const List = ({ data, itemType = "category", onPress }) => {
  const fnRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        {itemType === "category" ? (
          <CategoryItem category={item} />
        ) : (
          <ProductItem product={item} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      numColumns={itemType === "category" ? 2 : 1} // Si es category, que sean dos columnas, sino que sea una
      data={data}
      renderItem={fnRender}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
