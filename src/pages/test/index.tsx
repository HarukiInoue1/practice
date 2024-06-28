import Head from "next/head";
import styles from "./index.module.scss"
import cn from "classnames";
import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [isEnableText3, setIsEnablText3] = useState(false);
  console.log(isEnableText3);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.container__test}>テスト用</h1>
        <button onClick={() => router.push("../")} className={styles.container__button}>
          TOPページに戻ります
        </button>
      </div>
    </>
  );
}
export default Home