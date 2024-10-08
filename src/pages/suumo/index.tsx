import Head from "next/head";
import styles from "./index.module.scss";
import "ress";
import Image from "next/image";
import { Room } from "@/components/templates/Room";
import { Apartment } from "@/components/templates/Apartment";
import { NextPage } from "next";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container__inner}>
          <div className={styles.outlookWrapper}>
            <Image
              src="/images/suumo_outlook.jpg"
              alt="outlook"
              layout="fill"
              className={styles.outlook_image}
            />
          </div>
          <Apartment />
        </div>
        <div className={styles.room}>
          <table className={styles.room__table}>
            <thead>
              <tr className={styles.room__table__head}>
                <td/>
                <td/>
                <td>階</td>
                <td>賃料/管理費</td>
                <td>敷金/礼金</td>
                <td>間取り/専有面積</td>
                <td>お気に入り</td>
                <td/>
              </tr>
            </thead>
            <Room floor={3} rent={10} management={10000} deposit={10} reward=" - " occupation="1DK" layout={26.1}/>
            <Room floor={4} rent={15} management={15000} deposit={15} reward={15} occupation="1LDK" layout={28.5}/>
            <Room floor={4} rent={11.5} management={15000} deposit={11.5} reward={11.5} occupation="1DK" layout={24.8}/>
            <Room floor={6} rent={14} management={18000} deposit={14} reward={14} occupation="1DK" layout={26.1}/>
            <Room floor={6} rent={18} management={18000} deposit={18} reward={18} occupation="1LDK" layout={28.5}/>
          </table>
        </div>
      </div>
    </>
  );
};
export default Home;
