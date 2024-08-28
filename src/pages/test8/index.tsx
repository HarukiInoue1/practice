import { apiClient } from "@/config/axiosInstance";
import { AxiosError } from "axios";
import { NextPage } from "next";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

type Book = {
  id?: number;
  author: string;
  title: string;
};

const Test8: NextPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const {
    data: books,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<Book[], AxiosError>("books", async () => {
    const res = await apiClient.get("/books");
    return res.data;
  });

  // 本の投稿
  const { mutate: postBook } = useMutation(
    async (newBook: Book) => {
      await apiClient.post("/books", newBook);
    },
    { onSuccess: () => refetch() }
  );

  // 本の削除
  const { mutate: deleteBook } = useMutation(
    async (id: number) => {
      await apiClient.delete(`/books/${id}`);
    },
    { onSuccess: () => refetch() }
  );

  // 本の編集
  const { mutate: updateBook } = useMutation(
    async (updateBook: Book) => {
      if (updateBook.id) {
        await apiClient.put(`/books/${updateBook.id}`, updateBook);
      }
    },
    { onSuccess: () => refetch() }
  );

  if (isLoading) {
    return <h1>Now Loading...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editId) {
            updateBook({ id: editId, author, title });
          } else {
            postBook({ author, title });
          }
          setAuthor("");
          setTitle("");
          setEditId(null);
        }}
      >
        <div>
          <label htmlFor="author">著者</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">タイトル</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">投稿</button>
      </form>
      {books?.map((book) => (
        <div key={book.id}>
          <p>{book.author}</p>
          <p>{book.title}</p>
          <button onClick={() => book.id && deleteBook(book.id)}>削除</button>
          <button
            onClick={() => {
              setAuthor(book.author);
              setTitle(book.title);
              book.id && setEditId(book.id);
            }}
          >
            編集
          </button>
        </div>
      ))}
    </>
  );
};

export default Test8;
