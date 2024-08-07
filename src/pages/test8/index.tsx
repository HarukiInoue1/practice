import { apiClient } from "@/config/axiosInstance";
import { AxiosError } from "axios";
import { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useMutation, useQuery } from "react-query";

type Book = {
  id?: number;
  author: string;
  title: string;
};

const Test8: NextPage = () => {
  const [author, setAuthor] = useState("");

  const [title, setTitle] = useState("");

  // データ取得(GET)
  const {
    data: books,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Book[], AxiosError>("[books]", async () => {
    const res = await apiClient.get("/books");
    return res.data;
  });

  // データ投稿(POST)
  const { mutate } = useMutation(
    async (newBook: Book) => {
      const res = await apiClient.post("/books", newBook);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  // データ削除(DELETE)
  const deleteBook = useMutation(
    async (id?: number) => {
      await apiClient.delete(`/books/${id}`);
    },
    {
      onSuccess: () => {
        refetch();
      },
    }
  );

  if (isLoading) {
    return <div>ロード中</div>;
  }

  if (isError) {
    return <div>エラー: {error.message}</div>;
  }

  return (
    <>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          mutate({ author, title });
        }}
      >
        <div>
          <label htmlFor="author">作者</label>
          <input
            id="author"
            value={author}
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            id="title"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">投稿</button>
      </form>
      {/* ロード中やエラー用にオプショナルチェーン */}
      {books?.map((book) => (
        <div key={book.id}>
          <p>{book.author}</p>
          <p>{book.title}</p>
          <button onClick={() => deleteBook.mutate(book.id)}>削除</button>
        </div>
      ))}
    </>
  );
};

export default Test8;
