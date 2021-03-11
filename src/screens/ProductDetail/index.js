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
import Header from "../../components/Header";
import ButtonBuy from "../../components/ButtonBuy";
import data from "../../services/Products";

function ProductDetail(navigation, route) {
  const { idProduct } = route.params;
  const [number, setnumber] = useState(0);
  const product = Products.filter((item) => item.id === idProduct)[0];
  const AddProduct = () => {
    setnumber((state) => state + 1);
  };

  const SubProduct = () => {
    setnumber((state) => state - 1);
  };

  <View style={styles.container}>
    //thanh Header
    <Header
      goBack={() => navigation.navigate("Products")}
      title="ProductDetail"
    ></Header>
    //Anh
    <ScrollView>
      <View style={styles.content}>
        <FlatList
          horizontal={true}
          data={product.carouselImages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image style={styles.img} source={uri}></Image>
          )}
        ></FlatList>
        //Nut
        <ButtonBuy
          style={{ marginTop: 10, marginHorizontal: 20 }}
          number={number}
          onAddProduct={AddProduct}
          onSubProduct={SubProduct}
        ></ButtonBuy>
        //Ten San Pham
        <View style={styles.item}>
          <Text style={styles.header}>Name</Text>
          <Text style={styles.info}>{data.name}</Text>
        </View>
        //Chi Tiet
        <View style={styles.item}>
          <Text style={styles.header}>Detail</Text>
          <Text style={styles.info}>{data.detail}</Text>
        </View>
        //So Tien
        <View style={styles.item}>
          <Text style={styles.header}>Price</Text>
          <Text style={styles.info}>{data.price}</Text>
        </View>
        //Mau
        <View style={styles.item}>
          <Text style={styles.header}>Colour</Text>
          <Text style={styles.info}>{data.colour}</Text>
        </View>
      </View>
    </ScrollView>
  </View>;
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
    fontWeight:'bold',
},
info: {
    fontSize: 14,
},
});

export default ProductDetail;
