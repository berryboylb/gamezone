import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#eee", height: 80 },
            headerTitle: () => (
              <Header navigation={navigation} title={"About Gamezone"} />
            ),
            headerTitleAlign: "center",
          };
        }}
      />
    </Stack.Navigator>
  );
}
