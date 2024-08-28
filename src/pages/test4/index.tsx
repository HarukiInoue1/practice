import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

type Person = { name: string; age: number; note: string; registerDate: string };

const Test4: NextPage = () => {
  const router = useRouter();

  const fetchPersonList = async () => {
    const res = await axios.get(
      "https://umayadia-apisample.azurewebsites.net/api/persons"
    );
    return res.data.data;
  };

  const { data, isLoading, isError, error, isSuccess } = useQuery<
    Person[],
    AxiosError
  >(
    "persons",
    fetchPersonList,
    // リフェッチ機能オフ
    { refetchOnWindowFocus: false }
  );

  console.log(error);

  // ローディング中
  if (isLoading) return <div>ろーどちゅう</div>;

  // エラー
  if (isError)
    return (
      <div>
        {error.name} : {error.message}
      </div>
    );
  return (
    <>
      <div>
        <button onClick={() => router.push("/")}>TOPページへ</button>
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
