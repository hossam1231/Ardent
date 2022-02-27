import React from "react";
import { NativeBaseProvider } from "native-base";
import Product from "./components/product/Product";
import Loading from "./components/loading/Loading";
import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import Cart from "./components/cart/Cart";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  let [fontsLoaded] = useFonts({
    FrancoisOne: require("./assets/fonts/FrancoisOne/FrancoisOne.ttf"),
    OpenSans: require("./assets/fonts/OpenSans/OpenSans.ttf"),
    OpenSansBold: require("./assets/fonts/OpenSans/OpenSansBold.ttf"),
    Shizuru: require("./assets/fonts/Shizuru/Shizuru.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <NativeBaseProvider>
        <Loading fontsLoaded={false} size={100} />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
     <Cart/>
    </NativeBaseProvider>
  );
}
