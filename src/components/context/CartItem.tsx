import { createContext, useState } from "react";

export const NumberContext = createContext({} as any);

export const NumberProvider = ({ children }:{children:React.JSX.Element}) => {
    const [number, setNumber] = useState(0);

    return (
        <NumberContext.Provider value={{ number, setNumber }}>
            {children}
        </NumberContext.Provider>
    );
}