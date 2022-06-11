import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
const Drawer = createDrawerNavigator();
export default function Navigator(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{ headerTitle: "", headerShown: false }}
          />
          <Drawer.Screen
            name="About"
            component={AboutStack}
            options={{ headerTitle: "", headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}

