import styles from "./index.module.scss";

// booleanとpropsで賃貸と、分譲にわける
export const ApartmentType = () => {
  return (
    <>
      <p className={styles.apartment__type}>賃貸マンション</p>
    </>
  );
};
