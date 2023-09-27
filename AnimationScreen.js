import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import React, { useEffect, useRef } from "react";

const AnimationScreen = (props) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Tạo animation
    Animated.timing(translateY, {
      toValue: 350, // Giá trị đích
      duration: 2000, // Thời gian hoàn thành animation (ms)
      easing: Easing.linear, // Kiểu easing (có thể thay đổi)
      useNativeDriver: false, // Sử dụng Native Driver (cần thiết cho một số properties)
    }).start(); // Khởi động animation
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 30, fontSize: 20 }}>
        Thông tin: {props.route.params.name} - {props.route.params.msv}
      </Text>
      <Animated.View style={[styles.box, { transform: [{ translateY }] }]}>
        <Text style={styles.text}>AnimationScreen</Text>
      </Animated.View>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
