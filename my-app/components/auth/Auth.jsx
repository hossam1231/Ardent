import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
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
import Loading from "../loading/Loading";

export const Auth = () => {
const [first, setfirst] = useState(second)


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
      <Box alignItems="center" justifyContent="center" flex="1" p="2px">
        <Loading fontsLoaded={true} size={100} />
      </Box>

      {



      }

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

export default Auth;
