import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import HttpScreen from "./HttpScreen";
import AnimationScreen from "./AnimationScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home Screen",
          }}
        />
        <Stack.Screen name="HttpScreen" component={HttpScreen} />
        <Stack.Screen name="AnimationScreen" component={AnimationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
