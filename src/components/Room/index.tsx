import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

type Props = { rent: number; isNew?: boolean };
export const Room: FC<Props> = ({ rent, isNew = false }) => {
  const router = useRouter();
  // 括弧を使用することで、JSXのブロック全体が1つの式として扱われ、改行があっても正しく解釈される
  return (
    <tbody className={styles.room__table__body}>
      <tr>
        <td className={styles.new}>
          {/* &&の右にuseStateを使う？ */}
          {isNew && <p className={styles.new__inner}>新着</p>}
          <input type="checkbox" className={styles.checkbox} />
        </td>
        <td className={styles.room__wrapper}>
          <Image
            src="/images/suumo_room.jpg"
            alt="outlook"
            layout="fill"
            className={styles.room_image}
          ></Image>
        </td>
        <td>４階</td>
        <td>
          <span className={styles.room__table__body__text1}>{rent}万円</span>
          <br />
          15000円
        </td>
        <td>
          <p>
            <span className={styles.room__table__body__text2}>敷</span> 14.1万円
          </p>
          <p>
            <span className={styles.room__table__body__text2}>礼</span> -
          </p>
        </td>
        <td>
          1DK
          <br />
          26.1㎡
        </td>
        <td>
          <button className={styles.favorite__btn}>
            <span className={styles.room__table__body__text3}>♡</span>
            追加
          </button>
        </td>
        <td>
          <a href="#" className={styles.link}>
            詳細を見る
          </a>
          <button
            onClick={() => router.push("/")}
            className={styles.contact__btn}
          >
            お問い合わせ
            <br />
            (無料)
          </button>
        </td>
      </tr>
    </tbody>
  );
};
