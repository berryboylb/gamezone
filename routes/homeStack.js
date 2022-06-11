import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Gamezone"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTintColor: "#444",
            headerStyle: { backgroundColor: "#eee", height: 80 },
              headerTitle: () => <Header navigation={navigation} title={'Gamezone'} />,
            headerTitleAlign: "center",
          };
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          headerTintColor: "#444",
          headerStyle: { backgroundColor: "#eee", height: 80 },
        }}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
