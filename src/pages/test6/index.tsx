import { apiClient } from "@/config/axiosInstance";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

type Books = {
  author: string;
  title: string;
};

const Test6: NextPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery<Books[]>("books", async () => {
    const res = await apiClient.get("/books");
    return res.data;
  });

  const { mutate } = useMutation(
    async (newBook: Books) => {
      const res = await apiClient.post("/books", newBook);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの動作(フォーム送信時にページリロード)を防ぐ
    mutate({ author, title });
  };

  if (isLoading) return <div>ロード中</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author" style={{ marginRight: "3rem" }}>
            著者
          </label>
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
        {data?.map((elem, index) => (
          <div key={index}>
            <p>著者：{elem.author}</p>
            <p>タイトル：{elem.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Test6;
