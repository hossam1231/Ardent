import { AnimatePresence, MotiView } from "moti";
import React from "react";
import { Center, Text } from "native-base";
export const Loading = ({ size, fontsLoaded }) => {
  return (
    <Center flex="1">
      <AnimatePresence>
        <MotiView
          from={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
          animate={{
            width: size + 20,
            height: size + 20,
            borderRadius: (size + 20) / 2,
          }}
          transition={{
            type: "timing",
            duration: 1000,
            loop: true,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: size / 10,
            borderColor: "black",
            borderStyle: "solid",
            shadowColor: "#black",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1,
            shadowRadius: 10,
          }}
        >
          <Center flex="1">
            {fontsLoaded && (
              <Text fontFamily="Shizuru" color="black">
                ARDENT
              </Text>
            )}
          </Center>
        </MotiView>
      </AnimatePresence>
    </Center>
  );
};

export default Loading;
