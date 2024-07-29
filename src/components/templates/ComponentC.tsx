import { UserCount } from "@/pages/test7";
import { useContext } from "react";

const ComponentC = () => {
  const {count, setCount} = useContext(UserCount);

  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => setCount(count +1)}>+</button>
    </div>
  );
};

export default ComponentC;
