import React from "react";
import { NativeBaseProvider } from "native-base";
import Product from "./components/product/Product";
import Loading from "./components/loading/Loading";

import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    FrancoisOne: require("./assets/fonts/FrancoisOne/FrancoisOne.ttf"),
    OpenSans: require("./assets/fonts/OpenSans/OpenSans.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans/OpenSansBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Loading size={100} />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <Product />
    </NativeBaseProvider>
  );
}
