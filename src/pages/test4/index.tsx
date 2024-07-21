import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "react-query";

type Person = { name: string; age: number; note: string; registerDate: string };

const Test4: NextPage = () => {
  const router = useRouter();

  const [personList, setPersonList] = useState<Person[]>([]);

  const { isLoading, error } = useQuery("repoData", () =>
    axios
      .get("https://umayadia-apisample.azurewebsites.net/api/persons")
      .then((res) => setPersonList(res.data.data))
      .catch((err) => console.log(err))
  );

  // ローディング中
  if (isLoading) return <div>ろーどちゅう</div>;

  // エラー
  if (error) return <div>エラー</div>;

  console.log(personList);

  return (
    <>
      <div>
        <button onClick={() => router.push("/")}>TOPページへ</button>
        {personList.map((elem, index) => (
          <div key={index}>
            <p>名前：{elem.name}</p>
            <p>年齢：{elem.age}</p>
            <p>ノート：{elem.note}</p>
            <p>投稿日：{elem.registerDate}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test4;
