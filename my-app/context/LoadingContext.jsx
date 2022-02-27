import React, { useContext, useState, useEffect, createContext } from "react";

export const LoadingContext = React.createContext();

export const LoadingProvider = (props) => {
  useEffect(() => {
    if (lazyLoader.value) {
      console.log("#LAZYLOADER 1.0#", lazyLoader, "( ͡° ͜ʖ ͡°) ");
    }
  }, [lazyLoader]);

  const [lazyLoader, setLazyLoader] = useState({
    value: false,
    orgin: null,
  });

  return (
    <LoadingContext.Provider value={[lazyLoader, setLazyLoader]}>
      {props.children}
    </LoadingContext.Provider>
  );
};
