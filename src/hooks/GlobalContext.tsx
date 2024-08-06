import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GlobalContextType = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

type Props = {
  children: ReactNode;
};

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () =>  useContext(GlobalContext);