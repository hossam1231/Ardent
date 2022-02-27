import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  HStack,
  IconButton,
  ScrollView,
  Center,
  Icon,
} from "native-base";
import {
  Entypo,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

let noInCart = 2;

const Cart = () => {
  return (
    <Box p="20px" flex="1">
      <HStack
        mt="20px"
        h="50px"
        w="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* TOP BAR  */}
        <Box justifyContent="center" w="50px" h="50px">
          {/* close icon  */}
          <IconButton
            icon={<Icon as={AntDesign} name="close" />}
            borderRadius="full"
          />
        </Box>
      </HStack>

      <Text>
        BAG <Text>(</Text>
        <Text>{noInCart} </Text> <Text>)</Text>
      </Text>

      <Box flex="1">
        {/* scrollview */}
        <ScrollView flex="1"></ScrollView>
        <Box>
          <Text>Complete Your Look </Text>
          <ScrollView horizontal={true}></ScrollView>
       
        </Box>
      </Box>

      <Box>
        {/* bottom bar */}
        <HStack justifyContent="space-between">
          <Text>IS IT A GIFT ORDER</Text>
          <Text>SELECT</Text>
        </HStack>
        <Box w="100%" h="1px" bg="black"></Box>
        <HStack justifyContent="space-between">
          <Center>
            <Text>CONTINUE</Text>
          </Center>

          <Box>
            <Text>TOTAL 49.99 GBP</Text>
            <Text>VAT INCLUDED</Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Cart;
