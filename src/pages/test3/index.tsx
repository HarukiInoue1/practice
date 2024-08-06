import { apiClient } from "@/config/axiosInstance";
import { useGlobalContext } from "@/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

type Books = {
  author: string;
  title: string;
};

const Test3: NextPage = () => {
  const [bookList, setBookList] = useState<Books[]>([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const router = useRouter();

  const { count, setCount } = useGlobalContext();

  useEffect(() => {
    apiClient.get("/books").then((res) => {
      setBookList(res.data);
    });
  }, []);

  const postBook = () => {
    apiClient
      .post("/books", {
        author: author,
        title: title,
      })
      // 更新関数を使ってres.dataをbookListに追加する(配列型)=投稿時に再レンダリングさせる
      .then((res) => setBookList([...bookList, res.data]));
  };

  // eの型定義、何故必要なのか

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの動作(フォーム送信時にページリロード)を防ぐ
    postBook();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author" style={{ marginRight: "3rem" }}>
            著者
          </label>
          {/* onChangeは、フォーム内のエレメント（要素）の内容が変更された時に起こイベント処理 */}
          {/* onChange実行時にSyntheticBaseEvent内のtarget>valueに入力された値が格納される */}
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title" style={{ marginRight: "1rem" }}>
            タイトル
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">投稿</button>
      </form>

      <button onClick={() => router.push("/")}>TOPページへ</button>

      <div>
        {bookList.map((elem, index) => (
          <div key={index}>
            <p>著者：{elem.author}</p>
            <p>タイトル：{elem.title}</p>
          </div>
        ))}
      </div>

      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => router.push("/test7")}>ページ７へ</button>
    </>
  );
};

export default Test3;
