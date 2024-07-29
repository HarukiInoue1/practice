import { NextPage } from "next";
import { usePersonList } from "./hooks/usePersonList";

const Test100: NextPage = () => {
  const personList = usePersonList();

  console.log(personList);
  return (
    <div>
      {personList.map((elem, index) => (
        <div key={index} style={{ marginTop: "20px" }}>
          <div>名前:{elem.name}</div>
          <div>年齢:{elem.age}</div>
          <div>ノート:{elem.note}</div>
          <div>投稿日:{elem.registerDate}</div>
        </div>
      ))}
    </div>
  );
};

export default Test100;
