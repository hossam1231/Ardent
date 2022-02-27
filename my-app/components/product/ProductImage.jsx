import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { View, Animated, Image, FlatList, StyleSheet } from "react-native";
import Loading from "../loading/Loading";

const images = [
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_1_1_1.jpg?ts=1606727905128",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_1_1.jpg?ts=1606727908993",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_2_1.jpg?ts=1606727889015",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_3_1.jpg?ts=1606727896369",
  "https://static.zara.net/photos///2020/I/1/1/p/6543/610/091/2/w/2460/6543610091_2_4_1.jpg?ts=1606727898445",
];

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const ProductImage = (props) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const { container } = props;
  const { x, y, height, width } = props;

  useEffect(() => {
    console.log(x, y, height, width);
  });

  if (!props) {
    return <Loading fontsLoaded={true} size={100} />;
  }
  return <></>;
  // return (
  //   <>
  //     <AnimatedFlatList
  //       data={images}
  //       keyExtractor={(_, index) => index.toString()}
  //       snapToInterval={height}
  //       decelerationRate="fast"
  //       showsVerticalScrollIndicator={false}
  //       bounces={false}
  //       onScroll={Animated.event(
  //         [{ nativeEvent: { contentOffset: { y: scrollY } } }],
  //         { useNativeDriver: true }
  //       )}
  //       renderItem={({ item }) => {
  //         return (
  //           <View>
  //             <Image
  //               source={{ uri: item }}
  //               style={{
  //                 width: width,
  //                 height: height,
  //                 resizeMode: "cover",
  //               }}
  //             />
  //           </View>
  //         );
  //       }}
  //     />
  //     <View style={{ position: "absolute", top: height / 2, right: 20 }}>
  //       {images.map((_, index) => {
  //         return (
  //           <View
  //             key={index}
  //             style={{
  //               width: DOT_SIZE,
  //               height: DOT_SIZE,
  //               borderRadius: DOT_SIZE,
  //               backgroundColor: "#333",
  //               marginBottom: DOT_SPACING,
  //             }}
  //           />
  //         );
  //       })}
  //       <Animated.View
  //         style={
  //           (styles.dotIndicator,
  //           {
  //             transform: [
  //               {
  //                 translateY: Animated.divide(scrollY, height).interpolate({
  //                   inputRange: [0, 1],
  //                   outputRange: [0, DOT_INDICATOR_SIZE],
  //                 }),
  //               },
  //             ],
  //           })
  //         }
  //       />
  //     </View>
  //   </>
  // );
};

export default ProductImage;

const styles = StyleSheet.create({
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
