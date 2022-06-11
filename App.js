import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Navigator from "./routes/drawer";


const getFonts = () => {
  return Font.loadAsync({
    nunito_reg: require("./assets/fonts/Nunito-Regular.ttf"), //nunito_reg is the name of the font
    nunito_bold: require("./assets/fonts/Nunito-Bold.ttf"), //nunito_bold is the name of the font
  });
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  if (appIsReady) {
    return (
      <Navigator/>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setAppIsReady(true)}
        onError={console.warn}
      />
    );
  }
}
