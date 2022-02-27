import React, { useCallback, useMemo, useRef } from "react";
import {
  Center,
  Box,
  HStack,
  Text,
  IconButton,
  Badge,
  Icon,
  VStack,
} from "native-base";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  Entypo,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";

export const Product = () => {
  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["50%", "25%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
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

        <Box justifyContent="center" w="50px" h="50px">
          {/* share icon  */}
          <IconButton
            icon={<Icon as={Ionicons} name="share-outline" />}
            borderRadius="full"
          />
        </Box>
      </HStack>

      <Box flex="1" bg="black" p="2px">
        {/* PRODUCT IMAGE */}
      </Box>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Box mt="5px" p="20px" flex="1">
          {/* BOTTOMCARD */}
          <Box mb="10px">
            <Text fontFamily="OpenSans">NEW</Text>
            <Text fontFamily="FrancoisOne">TEXTURED PINAFORE SKIRT </Text>
            <Text fontFamily="OpenSans">$29.99</Text>
          </Box>

          <HStack h="40px" alignItems="center" justifyContent="space-between">
            <Center h="40px" w="120px" bg="black">
              {/* Add to basket  */}
              <Text fontFamily="OpenSansBold" color="white">
                ADD TO BAG
              </Text>
            </Center>

            <Box>
              <HStack justifyContent="space-between">
                <Box w="50px" h="50px">
                  {/* bookmark icon */}
                  <IconButton
                    icon={<Icon as={Ionicons} name="bookmark-outline" />}
                    borderRadius="full"
                  />
                </Box>
                <Box w="50px" h="50px">
                  {/* bag icon */}
                  <IconButton
                    icon={<Icon as={SimpleLineIcons} name="bag" />}
                    borderRadius="full"
                  />
                </Box>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </BottomSheet>
    </Box>
  );
};

export default Product;
