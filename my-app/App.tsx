import React from "react";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Product from "./components/product/Product";

export default function App() {
  return (
    <NativeBaseProvider>
      <Product />
    </NativeBaseProvider>
  );
}
