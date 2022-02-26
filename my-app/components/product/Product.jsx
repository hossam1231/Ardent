import React from "react";
import { Center, Box, HStack, Text } from "native-base";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

export const Product = () => {
  return (
    <Box p="20px" flex="1">
      <HStack
        mt="20px"
        mb="10px"
        h="50px"
        w="100%"
        bg="black"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* TOP BAR  */}
        <Box w="10px" h="10px">
          {/* close icon  */}
        </Box>
        <Box w="10px" h="10px">
          {/* share icon  */}
        </Box>
      </HStack>

      <Box flex="1" bg="black" p="2px">
        {/* PRODUCT IMAGE */}
      </Box>

      <Box>
        {/* BOTTOMCARD */}
        <HStack h="40px" alignItems="center" justifyContent="space-between">
          <Center h="20px" w="40px" bg="black">
            {/* Add to basket  */}
            <Text>ADD TO BAG</Text>
          </Center>

          <Box>
            <HStack justifyContent="space-between">
              <Box h="10px" w="10px">
                {/* bookmark icon */}
              </Box>
              <Box h="10px" w="10px">
                {/* basket bookmark icon */}
              </Box>
            </HStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Product;
