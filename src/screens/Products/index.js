import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import data from "../../services/Products";
import Header from "../../components/Header";

function ItemList({ data }) {
  return (
    <TouchableOpacity onPress={() => Alert.alert("Buy")}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: data.thumbImage,
            }}
          ></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.header} numberOfLines={2}>
            {data.name}
          </Text>
          <Text style={styles.price}>Price: {data.price}</Text>
          <Text>Colour: {data.colour}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Products({ navigation }) {
  return (
    <View style={styles.all}>
      <Header title="Products"></Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemList data={item}></ItemList>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  container: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  img: {
    width: 100,
    height: 150,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  price: {
    fontSize: 15,
    marginBottom: 10,
  },
});

export default Products;
