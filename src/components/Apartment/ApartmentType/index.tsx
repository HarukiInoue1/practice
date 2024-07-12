import styles from "./index.module.scss";
import { FC } from "react";
import cn from "classnames";

export const ApartmentType: FC<{ apartmentType: boolean }> = ({
  apartmentType = true,
}) => {
  return (
    <>
      <p
        className={cn(styles.apartment__type, {
          [styles.apartment__type__condominium]: !apartmentType,
        })}
      >
        {apartmentType ? "賃貸マンション" : "分譲マンション"}
      </p>
    </>
  );
};

export const ApartmentName: FC<{ apartmentName: string }> = ({
  apartmentName,
}) => {
  return (
    <>
      <h2 className={styles.apartment__name}>{apartmentName}</h2>
    </>
  );
};
