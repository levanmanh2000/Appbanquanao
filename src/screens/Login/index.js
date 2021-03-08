import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import { useState } from "react";

function Login({ navigation }) {
  const logins = {
    user: "manh2k",
    pass: "123",
  };

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (user.trim() === "") {
      return Alert.alert("Trường tài khoản không được để trống");
    }

    if (pass.trim() === "") {
      return Alert.alert("Trường mật khẩu không được để trống");
    }

    if (user !== logins.user || pass !== logins.pass) {
      return Alert.alert("Tài khoản hoặc mật khẩu không đúng");
    }

    navigation.navigate("Products");
  };

  return (
    <TouchableNativeFeedback>
      <View style={styles.all}>
        <Image style={styles.img} source={require("")}></Image>
        <TextInput
          style={styles.input}
          placeholder="tai khoan"
          onChangeText={(text) => setUser(text)}
        ></TextInput>

        <TextInput
          style={styles.input}
          placeholder="mat khau"
          secureTextEntry
          onChangeText={(text) => setPass(text)}
        ></TextInput>

        <TouchableOpacity
          style={styles.btLogin}
          onPress={() => navigation.navigate("Products")}
        >
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img: {
    width: 300,
    height: 150,
    resizeMode: "contain",
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 15,
  },
  btLogin: {
    width: 300,
    height: 50,
    backgroundColor: "#000",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  textLogin: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  pr: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
