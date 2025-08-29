// CurrentPageContext.jsx
import { createContext, useContext, useState } from "react";

const CurrentPageContext = createContext({
  data: null,
  setData: () => {},
});

export function CurrentPageProvider({ children }) {
  const [data, setData] = useState({
    id: "",
    name: "",
    image: "",
    description: "",
    ingredients: [],
    instructions: [],
  });

  return (
    <CurrentPageContext.Provider value={{data, setData}}>
      {children}
    </CurrentPageContext.Provider>
  );
}

export const usePage = () => useContext(CurrentPageContext);
