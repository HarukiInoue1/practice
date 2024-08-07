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

// プロバイダー、チルドレンに渡す
export const GlobalContextProvider: FC<Props> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

// コンシューマー(useContext)、カスタムフックを呼び出すことで子要素のどこでも使える
export const useGlobalContext = () =>  useContext(GlobalContext);