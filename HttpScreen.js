import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import React, { useEffect, useState } from "react";

const HttpScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const handlePress = () => {
    alert("Button Pressed!");
  };

  const getMovies = async () => {
    try {
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      console.log(json);
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ height: Dimensions.get("window").height / 4 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            // keyExtractor={({id}) => id}
            renderItem={({ item }) => (
              <Text style={styles.Text}>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <TouchableHighlight
        style={styles.btnLogin}
        underlayColor="#00FFFF"
        onPress={handlePress}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>

      <TouchableNativeFeedback>
        <Text style={styles.text}>TouchableNativeFeedback</Text>
      </TouchableNativeFeedback>
    </View>
  );
};

export default HttpScreen;
const styles = StyleSheet.create({
  Text: {
    backgroundColor: "#9FB6CD",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 2,
  },
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
  text: {
    marginTop: 15,
    borderWidth: 1,
    padding: 25,
    borderColor: "black",
    width: Dimensions.get("window").width / 1.5,
    backgroundColor: "#00CCFF",
  },
});
