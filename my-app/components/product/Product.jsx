import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  Center,
  Box,
  HStack,
  Text,
  IconButton,
  Icon,
  ZStack,
} from "native-base";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  Entypo,
  AntDesign,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import {
  TapGestureHandler,
  RotationGestureHandler,
} from "react-native-gesture-handler";
import {
  View,
  Animated,
  Image,
  FlatList,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";

// const width = Dimensions.get("window").width;
// const height = Dimensions.get("window").height;

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const images = [
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
];
let ITEM_WIDTH = 0;
let ITEM_HEIGHT = 0;

export const Product = () => {
  // layout
  const onLayout = (event) => {
    const { x, y, height, width } = event.nativeEvent.layout;
    setContainer({ x: x, y: y, height: height, width: width });
  };
  // state

  const scrollY = React.useRef(new Animated.Value(0)).current;

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

      <Box onLayout={onLayout} flex="1" p="2px">
      
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
              <HStack alignItems="center" justifyContent="space-between">
                <Box w="50px" h="50px">
                  {/* bookmark icon */}
                  <IconButton
                    icon={<Icon as={Ionicons} name="bookmark-outline" />}
                    borderRadius="full"
                  />
                </Box>
                {/* bag icon */}
                <ZStack
                  alignItems="center"
                  justifyContent="center"
                  w="50px"
                  h="50px"
                >
                  <IconButton
                    icon={<Icon as={SimpleLineIcons} name="bag" />}
                    borderRadius="full"
                  />
                  <Text fontFamily="OpenSans">5</Text>
                </ZStack>
              </HStack>
            </Box>
          </HStack>
        </Box>
      </BottomSheet>
    </Box>
  );
};

export default Product;

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    top: ITEM_HEIGHT / 2,
    right: 20,
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE,
    backgroundColor: "#333",
    marginBottom: DOT_SPACING,
  },
  dotIndicator: {
    width: DOT_INDICATOR_SIZE,
    height: DOT_INDICATOR_SIZE,
    borderRadius: DOT_INDICATOR_SIZE,
    borderWidth: 1,
    borderColor: "#333",
    position: "absolute",
    top: -DOT_SIZE / 2,
    left: -DOT_SIZE / 2,
  },
});
