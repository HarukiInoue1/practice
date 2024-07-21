import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
// import { useState } from "react";
import { useQuery } from "react-query";

type Person = { name: string; age: number; note: string; registerDate: string };

const Test4: NextPage = () => {
  const router = useRouter();

  const getPersonList = async () => {
    const res = await axios.get(
      "https://umayadia-apisample.azurewebsites.net/api/persons"
    );
    return res.data.data;
  };
  
  const {data, isLoading, error,isSuccess} = useQuery<Person[]>("persons", getPersonList);

  // ローディング中
  if (isLoading) return <div>ろーどちゅう</div>;

  // エラー
  if (error) return <div>エラー</div>;
  console.log(isSuccess);
  return (
    <>
      <div>
        <button onClick={() => router.push("/")}>TOPページへ</button>
        {/* <div>{isSuccess ? "データの取得に成功しました" : "データの取得に失敗しました"}</div> */}
        {/* useQueryから取得するdataの型はisLoading、errorも含むため、Person[] | undefinedとなる？*/}
        {data?.map((elem, index) => (
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
