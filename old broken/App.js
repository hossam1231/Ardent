import React, { useState, useEffect } from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import Loading from "./components/loading/Loading";
import Product from "./components/product/Product";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <Product />
    </NativeBaseProvider>
  );
}
