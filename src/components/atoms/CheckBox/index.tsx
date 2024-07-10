import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from "./index.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & { labelName: string };
export const CheckBox: FC<Props> = ({
  id,
  value,
  checked,
  onChange,
  labelName,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <label htmlFor={id} className={styles.container}>
      <input
        id={id}
        type="checkbox"
        value={value}
        checked={checked}
        onChange={handleChange}
        className={styles.container__input}
      />
      {labelName}
    </label>
  );
};