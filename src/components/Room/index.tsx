import { FC } from "react";
import { FavoriteButton } from "@/components/atoms/FavoriteButton";
import { ContactButton } from "@/components/atoms/ContactButton";
import { Link } from "@/components/atoms/Link"
import Image from "next/image";
import styles from "./index.module.scss";

type Props = {
  isNew?: boolean;
  floor: number;
  rent: number;
  management:number;
  deposit: number;
  reward: number | string;
  occupation: string;
  layout: number;
};
export const Room: FC<Props> = ({
  isNew = false,
  floor,
  rent,
  management,
  deposit,
  reward,
  occupation,
  layout,
}) => {
  // 括弧を使用することで、JSXのブロック全体が1つの式として扱われ、改行があっても正しく解釈される
  return (
    <tbody className={styles.room__table__body}>
      <tr>
        <td className={styles.new__wrapper}>
          {/* &&の右にuseStateを使う？ */}
          {isNew && (
            <div className={styles.new}>
              <p className={styles.new__inner}>新着</p>
            </div>
          )}
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
        <td>{floor}階</td>
        <td>
          <span className={styles.room__table__body__text1}>{rent}万円</span>
          <br />
          {management}円
        </td>
        <td>
          <p>
            <span className={styles.room__table__body__text2}>敷</span>{" "}
            {deposit}万円
          </p>
          <p>
            <span className={styles.room__table__body__text2}>礼</span> {reward}
            万円
          </p>
        </td>
        <td>
          {occupation}
          <br />
          {layout}㎡
        </td>
        <td>
          <FavoriteButton />
        </td>
        <td>
          <Link />
          <ContactButton />
        </td>
      </tr>
    </tbody>
  );
};
