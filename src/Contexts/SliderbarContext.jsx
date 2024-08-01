import React, { createContext, useState } from "react";

export const slidebarContext = createContext();

const SliderbarContext = ({children}) => {
    
    const [isopen, setIsOpen] = useState();

    const isClose = () => {
        setIsOpen(!isopen)
    }

    return (
      <slidebarContext.Provider
        value={{ isopen, setIsOpen, isClose  }}
      >
        {children}
      </slidebarContext.Provider>
    );
};

export default SliderbarContext;
