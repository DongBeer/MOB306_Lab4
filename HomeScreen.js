import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const HomeScreen = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => props.navigation.navigate("HttpScreen")}
      >
        <Text style={styles.btnLoginText}>HttpScreen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() =>
          props.navigation.navigate("AnimationScreen", {
            name: "Đông",
            msv: "PH30597",
          })
        }
      >
        <Text style={styles.btnLoginText}>AnimationSceen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  btnLogin: {
    width: Dimensions.get("window").width / 2,
    backgroundColor: "#00CCFF",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: "center",
    marginTop: 20,
  },

  btnLoginText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
