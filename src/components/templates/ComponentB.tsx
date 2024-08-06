import ComponentC from "./ComponentC";
import { useGlobalContext } from "@/hooks";

const ComponentB = () => {
  const { count, setCount } = useGlobalContext();
  return (
    <div>
      <p>Component B</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
