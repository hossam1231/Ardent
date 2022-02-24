import { AnimatePresence, MotiView } from 'moti';
import React from 'react';

export const LoadingIndicator = ({size = 20}: {size: number}) => {
  return (
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
          type: 'timing',
          duration: 1000,
          repeat: 3,
        }}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: size / 10,
          borderColor: '#fff',
          borderStyle: 'solid',
          shadowColor: '#fff',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 10,
        }}
      />
    </AnimatePresence>
  );
};

// const styles = StyleSheet.create({
//   shape: {
//     justifyContent: "center",
//     height: 250,
//     width: 250,
//     borderRadius: 25,
//     marginRight: 10,
//     backgroundColor: "white",
//   },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//     backgroundColor: "#9c1aff",
//   },
// });

export default LoadingIndicator;
