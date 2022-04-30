import { createContext , useState} from "react";

export const ToggleContext = createContext();

export const ToggleContectProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);
    const toggleChange = () => {
      setToggle(!toggle);
    };
  
    return <ToggleContext.Provider value={{toggle,toggleChange}}>{children}</ToggleContext.Provider>;
};