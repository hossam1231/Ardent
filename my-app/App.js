import React, { useState, useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import LoadingIndicator from "./components/loading/Loading";

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
      <Center bg="blueGray.900" px={4} flex={1}>
        <LoadingIndicator size={200} />
      </Center>
    </NativeBaseProvider>
  );
}
