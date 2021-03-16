import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ButtonBuy from "../../components/ButtonBuy";
import data from "../../services/data";
import moneyFormat from "../../services/moneyFormat";
import Context from "../../services/Context";

function Item({ uri }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri }} style={styles.img}></Image>
    </View>
  );
}

function ProductDetail({ route }) {
  const navigation = useNavigation();
  const [number, setnumber] = useState(0);
  const [context, setContext] = useContext(Context);
  const { idProduct } = route.params;

  const product = Products.filter((item) => item.id === idProduct)[0];

  const AddProduct = () => {
    setnumber((state) => state + 1);
  };

  const SubProduct = () => {
    setnumber((state) => state - 1);
  };

  const Buy = () => {
    setContext((state) => {
      state;
    });
    navigation.navigate("Products");
  };

  return (
    <View style={styles.container}>
      <Header
        goBack={() => navigation.navigate("Products")}
        title="ProductDetail"
        rightComponent={<Text>Buy</Text>}
        rightButton={Buy}
      ></Header>

      <ScrollView>
        <View style={styles.content}>
          <View style={{ height: 400 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              horizontal={true}
              data={product.carouselImages}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <Item uri={item}></Item>;
              }}
            ></FlatList>
          </View>
          <View>
            <ButtonBuy
              style={{ marginTop: 10, marginHorizontal: 20 }}
              number={number}
              onAddProduct={AddProduct}
              onSubProduct={SubProduct}
            ></ButtonBuy>
          </View>

          <View style={styles.item}>
            <Text style={styles.header}>Name</Text>
            <Text style={styles.info}>{data.name}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.header}>Detail</Text>
            <Text style={styles.info}>{data.detail}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.header}>Price</Text>
            <Text style={styles.info}>{moneyFormat(data.price)}</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.header}>Colour</Text>
            <Text style={styles.info}>{data.colour}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
//Dinh Dang
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  img: {
    width: 400,
    height: 400,
  },
  item: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  info: {
    fontSize: 14,
  },
});

export default ProductDetail;
