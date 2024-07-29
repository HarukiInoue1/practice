import { createContext, FC } from "react";

type ApartmentContextType = {
  apartmentType: boolean;
  apartmentName: string;
};

type Props = {
  children: React.ReactNode;
  value: ApartmentContextType;
};

// コンテキストのデフォルト値用
const sampleContext: ApartmentContextType = {
  apartmentType: true,
  apartmentName: "サンプル",
};

export const ApartmentContext =
  createContext<ApartmentContextType>(sampleContext);

export const ApartmentProvider: FC<Props> = ({ children, value }) => {
  return (
    <ApartmentContext.Provider value={value}>
      {children}
    </ApartmentContext.Provider>
  );
};
