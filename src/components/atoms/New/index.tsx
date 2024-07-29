import cn from "classnames";
import styles from "./index.module.scss";
import { FC } from "react";

type NewProps = {
  isChecked: boolean;
};

export const New: FC<NewProps> = ({ isChecked }) => {
  return (
    <>
      <div className={cn({ [styles.new]: isChecked })}>
        <p
          className={cn(styles.new__none, {
            [styles.new__inner]: isChecked,
          })}
        >
          新着
        </p>
      </div>
    </>
  );
};
