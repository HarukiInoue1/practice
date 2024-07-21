import axios from "axios";
import { useEffect, useState } from "react";

type Person = { name: string; age: number; note: string; registerDate: string };

export const usePersonList = () => {
  const [personList, setPersonList] = useState<Person[]>([]);

  useEffect(() => {
    axios
      .get("https://umayadia-apisample.azurewebsites.net/api/persons")
      // リクエストが成功したら、then内でコールバック関数が実行され、引数としてレスポンスオブジェクトが渡される
      .then((res) => {
        console.log(res);
        setPersonList(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return personList;
};

// 以下レスポンスオブジェクトの構造
// {
//   "data": {}, // サーバーから返されたデータ
//   "status": 200, // HTTPステータスコード
//   "statusText": "OK", // HTTPステータステキスト
//   "headers": {}, // レスポンスヘッダー
//   "config": {}, // リクエストの設定
//   "request": {} // リクエストオブジェクト（ブラウザ環境では非表示の場合あり）
// }
