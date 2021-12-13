import React, { useState, useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  Button,
  View,
  TextInput,
  NativeBaseProvider,
  extendTheme,
  Box,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { StyleSheet } from "react-native";
import { withAuthenticator } from 'aws-amplify-react-native'
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "./src/graphql/mutations";
import { listTodos } from "./src/graphql/queries";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
Amplify.configure(config);

const App = () => {
  return (
    <NativeBaseProvider>
      <Box>
        <Text>Hello</Text>
      </Box>
    </NativeBaseProvider>
  );
};

export default withAuthenticator(App)