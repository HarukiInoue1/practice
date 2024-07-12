// import { FC } from "react";
import { ApartmentName } from "@/components/Apartment/ApartmentName";
import { ApartmentType } from "@/components/Apartment/ApartmentType";
import { Informations } from "@/components/Apartment/informations/";
import styles from "./index.module.scss";

export const Apartment = () => {
  return (
    <>
      <div className={styles.apartment}>
        <ApartmentType />
        <ApartmentName />
        <Informations />
      </div>
    </>
  );
};
