import Head from "next/head";
import styles from "./index.module.scss"
import cn from "classnames";
import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const [isEnableText3, setIsEnablText3] = useState(false);
  console.log(isEnableText3);

  const sum = (num1: number, num2: number) => {
    return num1 + num2;
  };

  const sum2 = (num1: number, num2: number) => num1 + num2;
  console.log(sum(2,3));
  console.log(sum(5,6));

  const students = [
    { id: 1, name: "一郎", age: 16 },
    { id: 2, name: "二郎", age: 15 },
    { id: 3, name: "三郎", age: 14 },
  ];

  const ageList = students.map((elem) => elem.age)

  const ageList2 = students.map((elem, index) => {
    return elem.age
  })

  console.log(ageList);


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        こんにちは
        <div className={styles.container__text1}>
          test
        </div>
        <div className={cn(styles.container__text1, styles.container__text2, {
            [styles.container__text3]: isEnableText3,
            [styles.container__text4]: false
          })}>
          test2
        </div>
        <button onClick={() => setIsEnablText3(!isEnableText3)}>
          テキスト３有効化ボタン
        </button>

        <button onClick={() => router.push("/login")}>
          ログインページへ
        </button>

        {students.map((elem) => (
          <div key={elem.id}>
            <div>名前：{elem.name}</div>
            <div>年齢：{elem.age}</div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Home