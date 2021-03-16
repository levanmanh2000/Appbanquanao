import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import data from "../../services/data";
import Header from "../../components/Header";
import moneyFormat from "../../services/moneyFormat";
import Context from "../../services/Context";

function ItemList({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetail", { idProduct: data.id })
      }
    >
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
          <Text style={styles.price}>Price: {moneyFormat(data.price)}</Text>
          <Text>Colour: {data.colour}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function renderBadge() {
  const [context, setContext] = useContext(Context);
  let count = 0;
  if (Object.keys(context).length === 0) {
    count = 0;
  } else {
    context.forEach((item) => {
      if (item.quantity !== 0) {
        count = count + item.quantity;
      }
    });
  }

  return (
    <>
      <Text
        style={{
          top: -10,
        }}
      >
        Order
      </Text>
      {count !== 0 && (
        <View
          style={{
            right: 10,
            top: 10,
            backgroundColor: "#000",
            padding: 5,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff" }}>{count}</Text>
        </View>
      )}
    </>
  );
}

function Products({ navigation }) {
  return (
    <View style={styles.all}>
      <Header
        title="Products"
        rightComponent={renderBadge()}
        rightButton={() => navigation.navigate("Order")}
      ></Header>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString}
        renderItem={({ item }) => (
          <ItemList navigation={navigation} data={item}></ItemList>
        )}
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
