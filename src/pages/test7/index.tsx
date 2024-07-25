import ComponentA from "@/components/templates/ComponentA";
import { AnotherCountProvider } from "@/context/AnotherCountContext";
import { CountProvider } from "@/context/CountContext";

function contextApp() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Learn useContext</h1>
      {/* 子コンポーネントにデータを渡す */}
      <CountProvider>
        <AnotherCountProvider>
          <ComponentA />
        </AnotherCountProvider>
      </CountProvider>
    </div>
  );
}

export default contextApp;
