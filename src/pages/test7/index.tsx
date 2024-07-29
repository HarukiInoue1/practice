import ComponentA from "@/components/templates/ComponentA";
import { createContext, useState } from "react";

// コンテキストオブジェクトの作成

const defaultValue = {
  count: 100,
  // 空の関数
  setCount: () => {},
};

export const UserCount = createContext(defaultValue);



const contextApp = () => {
  const [count, setCount] = useState(100);

  const value = {
    count,
    setCount,
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      <UserCount.Provider value={value}>
        <ComponentA />
      </UserCount.Provider>
    </div>
  );
};

export default contextApp;
