import { children, createContext, useContext, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
    const [ city, setCity ] = useState("Ahmedabad");
    
    return (
        <CityContext.Provider value={{city, setCity}}>
            {children}
        </CityContext.Provider>
    )
}

export const useCity = () => useContext(CityContext); 