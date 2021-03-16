import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

function Header({ title, goBack, rightButton, rightComponent }) {
  const checkVisibleBackBt = () => {
    if (goBack === null) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.backBtn} onPress={onBack}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    );
  };

  const checkVisibleRightBt = () => {
    if (rightButton === null) {
      return null;
    }

    return (
      <TouchableOpacity style={styles.backBtn} onPress={rightButton}>
        <Text>{rightComponent}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        {checkVisibleBackBt}
        <Text style={styles.title}>{title}</Text>
        {checkVisibleRightBt}
      </View>
    </SafeAreaView>
  );
}

Header.defaultProps = {
  title: "Header",
  goBack: null,
  rightButton: null,
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  backBtn: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  backText: {
    fontSize: 20,
  },
});

export default Header;
