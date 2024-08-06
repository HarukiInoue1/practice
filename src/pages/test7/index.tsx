import ComponentA from "@/components/templates/ComponentA";
import React, { createContext } from "react";


export const UserCountContext = createContext<number>(0);

const contextApp = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      <UserCountContext.Provider value={100}>
        <ComponentA />
      </UserCountContext.Provider>
    </div>
  );
};

export default contextApp;
