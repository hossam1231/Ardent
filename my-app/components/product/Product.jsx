import React from "react";
import {
  View,
  Animated,
  Image,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const ITEM_WIDTH = width;
const ITEM_HEIGHT = height;

const product = {
  title: "DIORCLUB M1U",
  description:
    "The DiorClub M1U sunglasses are a rectangular-shaped mask with a sportswear appeal. In keeping with the silver mirrored lenses in a blue Dior Oblique motif, the design features large spoilers that lend a modern and graphic touch. The navy blue matte acetate frame contrasts with a line detail and a white shiny-finish 'CHRISTIAN DIOR' signature. Navy blue matte acetate frame and white signature Silver mirrored glass with blue Dior Oblique motif 'CHRISTIAN DIOR' signature on the temples 100% UVA/UVB protection Filter category: 3 Cannot be adapted for prescription lenses Made in Italy",
  price: "£520.00",
};

const images = [
  "https://media.dior.com/couture/ecommerce/media/catalog/product/0/p/1615455901_CLUBM1UXT_31B8_E03_ZHC.jpg?imwidth=870",
  "https://media.dior.com/couture/ecommerce/media/catalog/product/0/p/1615455901_CLUBM1UXT_31B8_E01_GH.jpg?imwidth=430",
  "https://media.dior.com/couture/ecommerce/media/catalog/product/z/Q/1615211178_CLUBM1UXT_31B8_E02_GH.jpg?imwidth=430",
];

const DOT_SIZE = 8;
const DOT_SPACING = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACING;

const Product = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View>
      <StatusBar hidden />
      <View stlye={{ height: ITEM_HEIGHT, overflow: "hidden" }}>
        <Animated.FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          snapToInverval={ITEM_HEIGHT}
          decelerationRate="fast"
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            );
          }}
        />
        <View style={styles.pagination}>
          {images.map((_, index) => {
            return <View key={index} style={[styles.dot]} />;
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: "cover",
  },
  pagination: {
    position: "absolute",
    top: ITEM_HEIGHT / 2,
    left: 20,
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

export default Product;
