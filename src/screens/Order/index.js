import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import Context from "../../services/createContext";
import moneyFormat from "../../services/moneyFormat";

function Order() {
  const navigation = useNavigation();
  const [context, setContext] = useContext(Context);

  const renderTotal = () => {
    let count = 0;

    context.forEach((item) => {
      if (item.quantity !== 0) {
        count = count + item.quantity * item.price;
      }
    });

    return moneyFormat(count);
  };

  const handleBuy = () => {
    setContext([]);
    Alert.alert("Thực hiện mua thành công");
    navigation.navigate("Products");
  };

  return (
    <View>
      <Header
        goBack={() => navigation.navigate("Products")}
        title="Order"
        rightButton={() => navigation.navigate("Order")}
      ></Header>
      <ScrollView>
        <View style={styles.content}>
          {context
            .filter((item) => item.quantity !== 0)
            .map((item, index) => {
              return (
                <View style={styles.row} key={index}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.text}>{item.quantity}</Text>
                </View>
              );
            })}
          <View style={[styles.row, { borderBottomWidth: 0 }]}>
            <Text style={[styles.text, styles.total]}>Total</Text>
            <Text style={[styles.text, styles.total]}>{renderTotal()}</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={Object.keys(context).length !== 0 ? handleBuy : () => {}}
          >
            <Text style={styles.buttonText}>Buy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 17,
    maxWidth: 250,
  },
  row: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.1)",
  },
  total: {
    fontSize: 17,
    fontWeight: "bold",
  },
  footer: {
    width: "100%",
    marginTop: 70,
  },
  button: {
    backgroundColor: "#000",
    marginHorizontal: 16,
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Order;
