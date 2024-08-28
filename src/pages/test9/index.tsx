import { NextPage } from "next";
import { useState } from "react";

// 型定義
type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

// 連想配列（オブジェクト）を含む配列
const initialProducts: Product[] = [
  { id: 1, name: "Apple", price: 150, inStock: true },
  { id: 2, name: "Banana", price: 100, inStock: false },
  { id: 3, name: "Orange", price: 120, inStock: true },
  { id: 4, name: "Mango", price: 200, inStock: false },
  { id: 5, name: "Grapes", price: 180, inStock: true },
];

const Test9: NextPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const inStockProducts = products.filter((product) => product.inStock == true);
  return (
    <>
      <h1>オブジェクト操作練習</h1>
      {inStockProducts.map((product) => (
        <div key={product.id}>
          <p>フルーツ{product.name}</p>
          <p>{product.price}円</p>
        </div>
      ))}

      <form
        onSubmit={(e) => {
          setName("");
          setPrice("");
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">追加</button>
        </div>
      </form>
    </>
  );
};

export default Test9;
