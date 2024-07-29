import styles from "./index.module.scss";
import { useContext } from "react";
import cn from "classnames";
import { ApartmentContext } from "@/context/ApartmentContext";

export const ApartmentType = () => {
  const context = useContext(ApartmentContext);

  console.log(context);

  const { apartmentType } = context;
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

export const ApartmentName = () => {
  const context = useContext(ApartmentContext);

  const { apartmentName } = context;
  return (
    <>
      <h2 className={styles.apartment__name}>{apartmentName}</h2>
    </>
  );
};
