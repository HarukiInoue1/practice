import {FC} from "react"
import styles from "./index.module.scss";

type Props = {
  // Room側でuseStateで管理
  isChecked: boolean;
  // propsで渡す時に、関数handleClickをいれたいのでfunctionである必要がある。返り値は必要ないのでvoid
  onCheckedChange: () => void;
};

export const CheckBox2:FC<Props> = ({isChecked, onCheckedChange}) => {
  return (
    <>
      <input
        checked={isChecked}
        onChange={onCheckedChange}
        type="checkbox"
        className={styles.checkbox}
      />
    </>
  );
};
