import { FC, useState } from "react";
import { FavoriteButton } from "@/components/atoms/FavoriteButton";
import { ContactButton } from "@/components/atoms/ContactButton";
import { Link } from "@/components/atoms/Link";
import { CheckBox2 } from "../atoms/CheckBox2";
import Image from "next/image";
import styles from "./index.module.scss";
import cn from "classnames";

type Props = {
  // isNew?: boolean;
  floor: number;
  rent: number;
  management: number;
  deposit: number;
  reward: number | string;
  occupation: string;
  layout: number;
};
export const Room: FC<Props> = ({
  // isNew = false,
  floor,
  rent,
  management,
  deposit,
  reward,
  occupation,
  layout,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => setIsChecked(!isChecked);

  return (
    <tbody className={styles.room__table__body}>
      <tr>
        <td className={styles.new__wrapper}>
          <div className={cn({ [styles.new]: isChecked })}>
            <p
              className={cn(styles.new__none, {
                [styles.new__inner]: isChecked,
              })}
            >
              新着
            </p>
          </div>
          {/* isCheckedはbooleanでuseStateで管理しているのでfalseが初期値、onCheckedChangeはStateとcnで管理 */}
          <CheckBox2 isChecked={isChecked} onCheckedChange={handleChecked} />
        </td>
        <td className={styles.room__wrapper}>
          <Image
            src="/images/suumo_room.jpg"
            alt="outlook"
            layout="fill"
            className={styles.room_image}
          />
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
