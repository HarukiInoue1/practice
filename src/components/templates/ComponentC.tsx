import { UserCountContext } from "@/pages/test7";
import { useRouter } from "next/router";
import { useContext } from "react";

const ComponentC = () => {
  const count = useContext(UserCountContext);
  const router = useRouter();

  return (
    <div>
      <p>Component C</p>
      <p>{count}</p>
      <button onClick={() => router.push("/test3")}>ページ３へ</button>
    </div>
  );
};

export default ComponentC;
