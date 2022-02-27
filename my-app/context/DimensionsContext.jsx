import React, { useContext, useState, createContext } from "react";

export const DimensionsContext = React.createContext();

export const DimensionsProvider = (props) => {
  const [dim, setDim] = useState({
    windowWidth: windowWidth,
    windowHeight: windowHeight,
  });

  return (
    <DimensionsContext.Provider value={Dim}>
      {props.children}
    </DimensionsContext.Provider>
  );
};
