import React from "react";

const Image = () => {
  const [container, setContainer] = useState({
    x: 1,
    y: 1,
    height: 1,
    width: 1,
  });

  

  return   {/* PRODUCT IMAGE */}
  <AnimatedFlatList
    data={images}
    keyExtractor={(_, index) => index.toString()}
    snapToInterval={ITEM_HEIGHT}
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
    <Animated.View
      style={
        (styles.dotIndicator,
        {
          transform: [
            {
              translateY: Animated.divide(
                scrollY,
                ITEM_HEIGHT
              ).interpolate({
                inputRange: [0, 1],
                outputRange: [0, DOT_INDICATOR_SIZE],
              }),
            },
          ],
        })
      }
    />
  </View>;
};

export default Image;
